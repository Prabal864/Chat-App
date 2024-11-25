import {Router} from "express";
import { loginUser, logoutUser, signupUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login",loginUser);
authRouter.post("/logout",logoutUser);
authRouter.post("/signup",signupUser);

export default authRouter;