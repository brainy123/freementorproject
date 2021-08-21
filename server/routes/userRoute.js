import express from "express";
import validator from "../middleware/validator.js"
import userController from "../controllers/userController.js";
import datachecker from "../middleware/datachecker.js"
 import Verifytoken from "../middleware/Tokenverify.js";
import verifyAccess from "../middleware/Tokenaccess.js";
import bcrypt from "bcrypt";
const userRouter =express.Router();
userRouter.get("/allmentors", Verifytoken,verifyAccess("user"),userController.viewAllMentors);
userRouter.post("/signup",
validator.newRules(),
datachecker.checkEmail,
datachecker.checkAge,
validator.validateInput,
userController.signupUser);
 userRouter.get("/all",Verifytoken,verifyAccess("admin"), userController.getAllUsers);
 userRouter.get("/:id/",Verifytoken,verifyAccess("mentor"),validator.checkId(),validator.validateInput,userController.getOneUser);
userRouter.get("/:id/mentor",Verifytoken,verifyAccess("user"),userController.getOneMentor);
 userRouter.patch("/:id",validator.checkId(),validator.validateInput,userController.updateById);
 userRouter.delete("/:id",validator.checkId(),validator.validateInput,userController.deleteUserById);
 userRouter.post("/signin",userController.signinUser);
userRouter.patch("/:id/role",Verifytoken,verifyAccess("admin"),userController.changeRoleOfUser);
export default userRouter;