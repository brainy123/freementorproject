import userInfo from "../models/userModel.js";
import tokenAuth from "../helpers/tokenAuth.js"
import bcrypt from "bcrypt";
class userController{
    static signinUser=async(request,response)=>{
        const {email,password}=request.body;
        const user= await userInfo.findOne({email:email});
        if(!user){
            return response.status(404).json({
                status:404,
                message:"user doesn't exists"
            })
        }
        if(bcrypt.compareSync(password,user.password))
        {
    const token=tokenAuth.tokenGeneretor({
        id:user._id,
        email:user.email,
        status:user.status,
        role:user.role
    })
    return response.status(200).json({
        status:200,
        meaage:"login successifully",
        token:token,
        data:user
    })
}
return response.status(404).json({
    status:404,
    message:"incorrect password "
})}
    static signupUser=async(request,response)=>{
        const saltRound=10;
        const hashPassword=bcrypt.hashSync(request.body.password,saltRound);
        //console.log(hashPassword);
        request.body.password=hashPassword;
const user=await userInfo.create(request.body);
if(!user)
{
    return response.status(404).json(
    {
        status:404,
        message:"user not registered well "
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
                message:" no user(s)found"
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
                        message:"user doesn't exist "
                    })
                }
                return response.status(200).json(
                    {
                        status:201,
                        message:" user found ",
                        data:user
                    })
                    }

                    static getOneMentor=async(request,response)=>{
                        const onementor=await userInfo.findById(request.params.id)
                        let role;
                        if(onementor.role!=="mentor")
                        {
                            return response.status(404).json({
                                status:404,
                                message:"mentor doesn't exist"
                            })
                        }
                        
                        return response.status(200).json({
                            status:201,
                            message:"mentor's info found",
                            data:onementor
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
                                    static changeRoleOfUser =async(request,response)=>{
                                        const change= await userInfo.findById(request.params.id);
                                        let role;
                                        if(change.role=="user"){
                                            role="mentor";
                                        }
                                        else(role="user");
                                   const user=await userInfo.findByIdAndUpdate(request.params.id,{role:role});
                                  if(!user)
                                  {
                                 return response.status(404).json({
                                status:404,
                                message:"no user with user role "
                                   })
                                      }
                            return response.status(200).json({
                             status:201,
                             message:"role of user updated well",
                             data:user
                            })

                                    }    
                                    static viewAllMentors =async(request,response)=>{
                                        const viewall= await userInfo.find({role:"mentor"});
                                        if(!viewall)
                                        {
                                            return response.status(404).json({
                                                status:404,
                                                message:"unable to find all mentors"
                                            })
                                        }
                                        return response.status(200).json({
                                         status:201,
                                        message:"All Mentors we have",
                                        data:viewall
                                        })

                                    }                    
}

export default userController;