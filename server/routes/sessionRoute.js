import express from "express";
import sessionController from "../controllers/sessionController.js";
const sessionRouter=express.Router();
sessionRouter.post("/save",sessionController.saveSession);
sessionRouter.get("/view",sessionController.viewAll);
sessionRouter.get("/:id",sessionController.viewOne);
sessionRouter.patch("/:id",sessionController.updateOne);
sessionRouter.delete("/:id",sessionController.deleteOne);
export default sessionRouter;
