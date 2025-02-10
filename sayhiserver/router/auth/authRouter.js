import { Router } from "express";
import checkUser from "../../controllers/auth/checkUser.js";
import onboardUser from "../../controllers/auth/onboardUser.js";
import login from "../../controllers/auth/login.js";
import logout from "../../controllers/auth/logout.js";

const authRouter = Router();

// Auth router
authRouter.post("/checkUser", checkUser);
authRouter.post("/onboardUser", onboardUser);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
