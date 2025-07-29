import { Router } from "express";
import {registerUser , loginUser} from "../Controllers/User_controler.js"
const router = Router()
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
export default router