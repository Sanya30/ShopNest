//register a new user 
const User = require('../model/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const sendEmail = require('../utils/sendEmail'); 

//JWT token
const generateToken = (id) =>{  
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn : '30d'});
}


//register user
const registerUser = async (req,res) => {

    const {name,email,password} = req.body; 

    try {
        const exisitingUser = await User.findOne({email}); 
        console.log(exisitingUser); 
        if(exisitingUser)
        {
            return res.status(400).json({message : "User already exists"}); 
        }
        else
        {
            const salt = await bcrypt.genSalt(10); 
            const hashedPassword = await bcrypt.hash(password,salt); 

            const user = await User.create({name, email, password: hashedPassword});
            console.log(user); 
            if(user)
            {
                const otp =(Math.floor(100000+Math.random()*900000)).toString();

                const message = `Welcome to Shopnest ${name}!. Thankyou for registering with us. 
                Your otp for registeration is ${otp}`;
                 
                console.log("attempted to send Email"); 
                await sendEmail(email,'Welcome to shopnest, your otp for registeration', message); //email,subject,content 
                console.log("Email sent");

                return res.status(201).json({
                    _id : user._id,
                    name : user.name,
                    email : user.email,
                    role : user.role, 
                    token : generateToken(user._id)
                }); 

            }
        }

    }
    catch(error){
        console.error("Register error:", error);
        res.status(500).json({message : "Server error"}); 
    }
};

//login user 
const loginUser = async(req,res)=>{

    const {email, password} = req.body; 

    try{
    const user = await User.findOne({email}); 

    if(user && await bcrypt.compare(password, user.password))
    {

        res.status(202).json({
           _id : user._id,
           name : user.name,
           password : user.password,
           role : user.role,
           token : generateToken(user._id)
        }); 
    }
    else
        res.status(400).json({Message : "Invalid user or password"}); 
    }
    catch(error)
    {
        res.status(500).json({message : 'Server error'}); 
    }
}; 

//get users 
const getUsers = async (req,res) =>{
    try{
    const Users = await User.find({}).select('-password');
    res.json(Users);  
    }
    catch {
        res.json({message : 'cannot get the Users'}); 
    }
};

module.exports = {registerUser, 
                  loginUser,
                  getUsers} ;