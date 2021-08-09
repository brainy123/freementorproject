import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default class tokenAuth{
    static tokenGeneretor(data){
        const token=jwt.sign(data,process.env.JWTKEY,{expiresIn:"1d"});
        return token
    }
}
