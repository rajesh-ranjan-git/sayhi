import { Router } from "express";
import register from "../../controllers/auth/register.js";
import login from "../../controllers/auth/login.js";
import logout from "../../controllers/auth/logout.js";
import checkUser from "../../controllers/auth/checkUser.js";

const authRouter = Router();

// Auth router
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/checkUser", checkUser);

export default authRouter;
