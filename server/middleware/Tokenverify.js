import tokenAuth from "../helpers/tokenAuth.js";
const Verifytoken= async(request,response,next)=>{
    const token=request.header("x-laurence");
    if(!token)
    {
        return  response.status(404).json({
            status:404,
            message:"no token provided"
        })
    }
    try{
        const user=tokenAuth.getDataFromToken(token);
        request.user=user;
        return next();
    }
    catch (err){
        console.log("<><><> this is error",err);
    }
}
export default Verifytoken; 