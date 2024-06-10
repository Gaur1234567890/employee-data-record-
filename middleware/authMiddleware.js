const jwt = require('jsonwebtoken')
const env = require('dotenv')
env.config()


let authMiddleware = (req,res,next)=>{
    if(req.headers.authorization === undefined)
        {
            res.status(403).json({msg:'unauthorized access'})
        }
        else
        {
            var token = req.headers.authorization.split(' ')[1];
            try
            {
                var decoded = jwt.verify(token,process.env.SECRET_KEY)
                req.body = decoded;
                next()
            }
            catch(err){
                res.status(400).json({msg:'unauthorized access',error:err})
            }
        }
}

let adminauth = (req,res,next)=>{
    if(req.body.role !== 'admin')
        {
            res.status(402).json({msg:'not permission'})
        }
        else
        {
            next()
        }
}

let studentAuth = (req,res,next)=>{
    if(req.body.role === 'student')
        {
            res.status(402).json({msg:'not permission to student'})
        }
        else
        {
            next()
        }
}

let allAccess = (req,res,next)=>{
    if(req.body.role == 'student' || req.body.role == 'teacher' || req.body.role == 'admin')
        {
            next()
        }
}

module.exports ={allAccess,studentAuth,adminauth,authMiddleware}