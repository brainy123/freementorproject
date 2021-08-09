import {check,validationResult} from "express-validator";
class validator{
static validateInput=(request,response,next)=>{
const errors=validationResult(request);
if(!errors.isEmpty())
{
const errorMessage= errors.errors.map((err)=> err.msg);
return response.status(404).json({
    status:404,
    message:errorMessage
})
}
return next();
}

static newRules(){
    return [
        check("email","plz your email invalid").isEmail(),
        check("firstname","plz your firstname is not string").isAlpha(),
        check("lastname","plz your lastname is not string").isAlpha(),
        check("password","plz your password is not strong").isStrongPassword(),
        check("gender","plz your gender must be female or male only").isIn(['male','female']),
        check("age","plz your age must be number").isInt()

    ];
}
static checkId(){
    return [
        check("id","plz this isn't mongo ID").isMongoId(),
    ]
}
}

export default validator;