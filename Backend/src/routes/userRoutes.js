import {Router} from "express";
import {createUser} from "../controllers/userController.js"
import { loginUser, logoutUser } from "../controllers/userController.js";

const router = Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser )
export default router;