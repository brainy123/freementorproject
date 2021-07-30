import userInfo from "../models/userModel.js";
class userController{
    static signupUser=async(request,response)=>{
const user=await userInfo.create(request.body);
if(!user)
{
    return response.status(404).json(
    {
        status:404,
        message:"unable to register user "
    })
}
return response.status(200).json(
    {
        status:201,
        message:"user registered well ",
        data:user
    })
    }
    static getAllUsers=async(request,response)=>{
        const user=await userInfo.find();
        if(!user)
        {
            return response.status(404).json(
            {
                status:404,
                message:" user(s) not found "
            })
        }
        return response.status(200).json(
            {
                status:201,
                message:"user(s) found ",
                data:user
            })
            }
        
            static getOneUser=async(request,response)=>{
                const user=await userInfo.findById(request.params.id);
                if(!user)
                {
                    return response.status(404).json(
                    {
                        status:404,
                        message:"unable to find one user "
                    })
                }
                return response.status(200).json(
                    {
                        status:201,
                        message:"one user found ",
                        data:user
                    })
                    }

                    static updateById=async(request,response)=>{
                        const user=await userInfo.findByIdAndUpdate(request.params.id,request.body);
                        if(!user)
                        {
                            return response.status(404).json(
                            {
                                status:404,
                                message:"user's info not updated "
                            })
                        }
                        const updateuser=await userInfo.findById(request.params.id);
                        return response.status(200).json(
                            {
                                status:201,
                                message:"user's info updated well",
                                data:updateuser
                            })
                            }
                            
                            static deleteUserById=async(request,response)=>{
                                const user=await userInfo.findByIdAndDelete(request.params.id);
                                if(!user)
                                {
                                    return response.status(404).json(
                                    {
                                        status:404,
                                        message:"unable to delete user"
                                    })
                                }
                                return response.status(200).json(
                                    {
                                        status:201,
                                        message:"User deleted successifully ",
                                        data:user
                                    })
                                    }                        
}

export default userController;