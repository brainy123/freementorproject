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
        default: "ABcd1234@"
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
    profile:{
        type:String
    },
    
});
const userInfo=mongoose.model('user',userSchema);
export default userInfo;