import sessionInfo from "../models/sessionModel.js";
class sessionController{
static saveSession=async(request,response)=>{
 const save=await sessionInfo.create(request.body) ;
 if(!save)
 {
     return response.status(404).json(
         {
         status:404,
         message:"not able to save session"    
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

}
export default sessionController;