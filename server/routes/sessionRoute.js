import express from "express";
import sessionController from "../controllers/sessionController.js";
import verifyAccess from "../middleware/Tokenaccess.js";
import Verifytoken from "../middleware/Tokenverify.js";
const sessionRouter=express.Router();
sessionRouter.post("/create",Verifytoken,verifyAccess("user"), sessionController.createSession);
sessionRouter.get("/view",Verifytoken,verifyAccess("mentor"),sessionController.viewAll);
sessionRouter.get("/:email/viewmysessions",Verifytoken,verifyAccess("user"),sessionController.viewAllMySessions);
sessionRouter.get("/:id",Verifytoken,verifyAccess("user"), sessionController.viewOne);
sessionRouter.patch("/:id", Verifytoken,verifyAccess("admin"), sessionController.updateOne);
sessionRouter.delete("/:id",Verifytoken,verifyAccess("admin"), sessionController.deleteOne);
sessionRouter.patch("/:id/statusapp",Verifytoken,verifyAccess("mentor"), sessionController.changeStatusToApproved);
sessionRouter.patch("/:id/statusdec",Verifytoken,verifyAccess("mentor"), sessionController.changeStatusToDecline);
export default sessionRouter;
