import express from "express";
import  mongoose  from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/routes/userRoute.js";
import sessionRouter from "./server/routes/sessionRoute.js";
import bodyParser from "body-parser";
dotenv.config({path:'./.env'});
const app=express();
app.use(bodyParser.json());
app.use("/freementorproject/v1/user",userRouter);
app.use("/freementorproject/v1/session",sessionRouter);
app.listen(2020,()=>{
    const dbUrl=process.env.DATABASE;
    mongoose.connect(dbUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("database connected well"));
console.log(dbUrl);
    console.log("server running at 2020");  
}
)
export default app;