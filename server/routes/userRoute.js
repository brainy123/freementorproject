import express from "express";
import validator from "../middleware/validator.js"
import userController from "../controllers/userController.js";
import datachecker from "../middleware/datachecker.js"
import Verifytoken from "../middleware/Tokenverify.js";
import verifyAccess from "../middleware/Tokenaccess.js";
const userRouter =express.Router();
userRouter.post("/signup",
validator.newRules(),
datachecker.checkEmail,
datachecker.checkAge,
validator.validateInput,
userController.signupUser);
userRouter.get("/all",userController.getAllUsers);
userRouter.get("/:id/",Verifytoken,verifyAccess("user"),validator.checkId(),validator.validateInput,userController.getOneUser);
userRouter.patch("/:id",validator.checkId(),validator.validateInput,userController.updateById);
userRouter.delete("/:id",validator.checkId(),validator.validateInput,userController.deleteUserById);
userRouter.post("/signin",userController.signinUser);
userRouter.patch("/:id/role",Verifytoken,verifyAccess("admin"),userController.changeRoleOfUser);
userRouter.get("/all/mentor",Verifytoken,verifyAccess("user"), userController.viewAllMentors);
export default userRouter;