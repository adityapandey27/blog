const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    profilePicture:{
        type:String,
        default:''
    },
    // we can create a create at and updated at but we have a nice shortcut for it
    // which is time stamp
},
{timestamps:true})

module.exports=mongoose.model("User",UserSchema)
// model name is User and model us UserSchema