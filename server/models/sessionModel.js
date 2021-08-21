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
    user:
    {
    type: mongoose.Schema.ObjectId,
    ref:"user"
    },
    status:
    {
        type:String,
enum:["pending","approved","decline"],
default:"pending"
    },
    mentor:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
         required:[true,"mentor is required plz"]
       
    },
    timetostart:Date,
    timetoend:Date
});
sessionSchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"firstname lastname email phone gender"
    }).populate({
        path:"mentor",
        select:"firstname lastname email phone gender profile"
    });
    next();
})
const sessionInfo=mongoose.model('session',sessionSchema);
export default sessionInfo;