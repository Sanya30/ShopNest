const jwt = require('jsonwebtoken'); 
const User = require('../model/User'); 


const protect = async(req,res,next)=>{
    let token; 

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        {
        try
        {
            token = req.headers.authorization.split(' ')[1]; //token format - bearer token- and token is divided in 3 parts - contains _id, JWT_SECRET and one more thing that makes the key unique 
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user =  await User.findById(decoded.id).select('-password');  //_id mongoDb fetched from token 
            next(); 
        }
        catch(error){
            res.json({message : 'not authorized, token match failed'}); 
        }
      }
      if(!token)
      {
        res.json({message : 'not authorized, no token'})
      }
    };

    module.exports = {protect}; 
