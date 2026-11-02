const admin = (req,res,next) =>{
    if(req.user && req.user.role === 'admin')
    {
        next(); //if a person has admin access then only he will be able to access all users details 
    }
    else
    {
        res.status(403).json({message : 'Access denied, Admin only'}); 
    }
}; 

module.exports = {admin}; 