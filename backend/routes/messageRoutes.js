import {Router} from "express";
import {sendMessages, getMessages} from "../controllers/messageController.js";
import protectRoutes from "../midelleware/protectRoutes.js";

const messageRouter = Router();

messageRouter.post("/send/:id",protectRoutes,sendMessages);
messageRouter.get("/:id",protectRoutes,getMessages);

export default messageRouter;
