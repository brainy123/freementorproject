const verifyAccess= function(requiredrole){
return async(request,response,next)=>
{
try{
    const role=request.user.role;
    if(requiredrole!==role){
return response.status(404).json({
    status:404,
    message:"you have no access"
})
    }
    return next();
}
catch(err){
    console.log(err);
}
}
}
export default verifyAccess;