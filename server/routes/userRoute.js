import express from "express";
import userController from "../controllers/userController.js";
const userRouter =express.Router();
userRouter.post("/signup",userController.signupUser);
userRouter.get("/all",userController.getAllUsers);
userRouter.get("/:id/",userController.getOneUser);
userRouter.patch("/:id",userController.updateById);
userRouter.delete("/:id",userController.deleteUserById);
export default userRouter;