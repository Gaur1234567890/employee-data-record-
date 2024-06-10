const { register } = require("../model/register")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const env = require('dotenv')
env.config()

let loginController = (req,res)=>{

    register.findOne({email:req.body.email}).
    then(d=>{
        if(d==null)
            {
                res.status(403).json({
                    msg:'please enter valid email or password'
                })
            }
            else
            {
            
                if(bcrypt.compareSync(req.body.password,d.password))
                    var token = jwt.sign({role:d.role,data:req.body},process.env.SECRET_KEY)
                res.status(200).json({
                    msg:'login successfully',
                    token:token
                })
            }
    }).catch(e=>{
        console.log(e)
        res.status(403).json({
            msg:'please enter valid email or password',
        })
    })
}

module.exports ={loginController}