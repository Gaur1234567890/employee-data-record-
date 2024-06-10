const mongoose  = require("mongoose");

let studentRecord = new mongoose.Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    mobileno:{type:Number},
    email:{type:String,unique:true,required:true}
},
{
    timestamps:true
})

let createStudent = mongoose.model('data',studentRecord)

module.exports={createStudent}