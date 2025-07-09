import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    email:{
        type :String,
        required :true,
        null:false,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
        null:false,
    },
    password:{
        type:String,
        required:true,
        null:false,
    },
    

})

const user = mongoose.model("user",userSchema);
export default user;