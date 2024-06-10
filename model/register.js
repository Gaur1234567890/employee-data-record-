const { mongoose } = require("../config/db");

let studentSchema = mongoose.Schema({
    firstname:{type:String,required:true},
    surname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    mobileno:{type:Number,required:true},
    role:{type:String,
        enum:['student','teacher','admin'],
        default:'student'
    }
},
   {
    timestamps:true
   }
)

let register = mongoose.model('student',studentSchema)

module.exports = {register}

