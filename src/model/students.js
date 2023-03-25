const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Why you no give name?"],
        minlength:3,
        unique:[true,"Why you want to cheat mee?"]
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Your email is invalid");
            }
        },
        unique:[true,"why you cheat me??"]
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10
    },
    address:{
        type:String,
        required:true
    }
});
const student = new mongoose.model('student',studentSchema);
module.exports = student;