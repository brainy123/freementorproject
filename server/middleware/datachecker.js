import userInfo from "../models/userModel.js";
class datachecker{
static checkEmail= async(request,response,next)=>{
const email= await userInfo.findOne({email: request.body.email});
if(!email)
{
    return next();
}
return response.status(404).json({
    status:404,
    message:"email already exist"
})
}
static checkAge= async(request,response,next)=>{
  if(request.body.age <18)
  {
      return response.status(404).json({
          status:404,
          message:"under age plz"
      })
  }
  return next();  
}
}
export default datachecker;