import {Router} from "express";
import protectRoutes from "../midelleware/protectRoutes.js";
import { getUserForSidebar } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/",protectRoutes,getUserForSidebar);

export default userRouter;
