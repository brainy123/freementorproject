import sessionInfo from "../models/sessionModel.js";
class sessionController{
static createSession=async(request,response)=>{
    console.log(request.user);
    request.body.user=request.user.id;
 const save=await sessionInfo.create(request.body);
 if(!save)
 {
     return response.status(404).json(
         {
         status:404,
         message:"not able to create session"    
         }
         )
 }
 return response.status(201).json(
     {
       status:200,
     message:"session saved",
     data:save   
     } 
 ) 
}
static viewAll=async(request,response)=>{
    const view= await sessionInfo.find();
    if(!view)
    {
        return response.status(404).json(
            {
                status:404,
                message:"no session(s) we have"
            }
        )
    }
    return response.status(201).json(
        {
            status:200,
            message:"All sessions found",
            data:view
        }
    )
}
static viewOne=async(request,response)=>{
    const view= await sessionInfo.findById(request.params.id);
    if(!view)
    {
        return response.status(404).json(
            {
                status:404,
                message:"no one session found"
            }
        )
    }
    return response.status(201).json(
        {
            status:200,
            message:"one session found",
            data:view
        }
    )
}
static updateOne=async(request,response)=>{
    const update= await sessionInfo.findByIdAndUpdate(request.params.id,request.body);
    if(!update)
    {
        return response.status(404).json(
            {
                status:404,
                message:"unable to update"
            }
        )
    }
    return response.status(201).json(
        {
            status:200,
            message:"session updated well",
            data:update
        }
    )
}
static deleteOne=async(request,response)=>{
    const del= await sessionInfo.findByIdAndDelete(request.params.id);
    if(!del)
    {
        return response.status(404).json(
            {
                status:404,
                message:"unable to delete sssion"
            }
        )
    }
    return response.status(201).json(
        {
            status:200,
            message:"session deleted well",
            data:del
        }
    )
}
static changeStatusToApproved =async(request,response)=>{
    const change= await sessionInfo.findById(request.params.id);
    let status;
    if(change.status=="pending"){
        status="approved";
    }
    else(status="pending");
const user= await sessionInfo.findByIdAndUpdate(request.params.id,{status:status});
if(!user)
{
return response.status(404).json({
status:404,
message:"unable to change to approved status "
})
  }
const updated= await sessionInfo.findById(request.params.id);
return response.status(200).json({
status:201,
message:"approved status updated well",
data:updated
})
}  

static changeStatusToDecline= async(request,response)=>{
    const change= await sessionInfo.findById(request.params.id);
    let status;
    if(change.status=="pending")
    {
        status="decline";
    }
    else(status="pending");
    const updatechanges= await sessionInfo.findByIdAndUpdate(request.params.id,{status:status});
    if(!updatechanges)
    {
        return response.status(404).json({
            status:404,
            message:"unable to change to decline status"
        })
    }
    return response.status(200).json({
        status:201,
        message:"decline status updated well",
        data:updatechanges
    })
}
static viewAllMySessions = async(request,response)=>{
    const sessions = await sessionInfo.find({user:request.user.id});
    if(!sessions ){
        return response.status(400).json({
            status:400,
            message:"failed to get all "
        })
    
    }
    return response.status(200).json({
        status:200,
        message:"success",
        data:sessions
    })
}
}
export default sessionController;