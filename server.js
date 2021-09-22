import express from "express";
import  mongoose  from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/routes/userRoute.js";
import sessionRouter from "./server/routes/sessionRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config({path:'./.env'});
const app=express();
app.use(cors());
app.use(bodyParser.json());
//user model
app.use("/freementorproject/v1/user",userRouter);
//session model
app.use("/freementorproject/v1/session",sessionRouter);

app.use('/',(req,res)=>{
    res.status(404).send({
        statu:404,
        message:"this route does not exist"
    })
})
const dbUrl=process.env.DATABASE;
   const port=process.env.PORT;
    mongoose.connect(dbUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("database connected well"));
//console.log(dbUrl);
app.listen(port,()=>{
    
    console.log(`server running at ${port}`);  
}
)
export default app;