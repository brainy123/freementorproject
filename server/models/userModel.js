import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstname:
    {
        type:String,
        required:[true,"firstname is required"]
    },  
    lastname:{
        type:String,
        required:[true,"lastname is required"]
    },
    email:
    {
    type: String,
    unique:true
    },
    password:
    {
        type:String,
        default: "123456"
    },
    gender:{    
        type:String,
    enum:["male","female"]
},
    phonenumber:String,
    age:Number
});
const userInfo=mongoose.model('user',userSchema);
export default userInfo;