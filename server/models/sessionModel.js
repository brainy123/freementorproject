import mongoose from "mongoose";
const sessionSchema=new mongoose.Schema({
    title:
    { type:String,
        required:[true,"title is required"]
    },
    description:
    {
        type:String,
        required:[true,"description is required"]
    },
    role:
    {
        type:String,
        enum:["user","admin","mentor"],
        default:"user"
    },
    mentor:{
        type:String,
        required:[true,"mentor is required plz"]
    },
    status:
    {
        type:String,
enum:["pending","approved","decline"],
default:"pending"
    },
    timetostart:String,
    timetoend:String
});
const sessionInfo=mongoose.model('session',sessionSchema);
export default sessionInfo;