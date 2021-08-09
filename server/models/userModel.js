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
    phonenumber:
    {
type:String},

    age:
    {
        type:Number
    },
    role:
    {
        type:String,
        enum:["user","admin","mentor"],
        default:"user"

    },
});
const userInfo=mongoose.model('user',userSchema);
export default userInfo;