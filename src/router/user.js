import express from "express"
import loginController from "../controller/loginController.js";
import signupController from "../controller/signupController.js";
export const userRouter = express.Router();

userRouter.post('/signup', signupController)
userRouter.post('/login', loginController)
