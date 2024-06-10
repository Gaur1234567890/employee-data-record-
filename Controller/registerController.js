const { validationResult } = require("express-validator")
const { register } = require("../model/register")
const bcrypt = require('bcrypt')

let registerController = (req,res)=>{

    const errors = validationResult(req)
    if(!errors.isEmpty())
        {
            res.status(403).json({
                msg:'invalid email or password will be 8 digit'
            })
        }
        else
        {
            let saltpassword = 10;
         let encrypted = bcrypt.hashSync(req.body.password,saltpassword)
         req.body.password = encrypted
            let obj = new register(req.body)
    obj.save().then(d=>{
        res.status(200).json({
            msg:'registration successfully',
            data:d
        })
    }).catch(e=>{
        res.status(400).json({
            msg:'error to save data',e
        })
    })
        }
        }
   


module.exports = {registerController}