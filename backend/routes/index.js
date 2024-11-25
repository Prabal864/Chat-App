import {Router} from "express";
import authRouter from "./authRoutes.js";
import messageRouter from "./messageRoutes.js";
import userRouter from "./userRoutes.js";

export const appRouter = Router();

appRouter.use("/auth",authRouter);
appRouter.use("/message",messageRouter);
appRouter.use("/user",userRouter);
