import express from 'express';
import { signup } from '../controllers/authController.js';
import { signupValidation } from '../middlewares/authValidation.js';
import { loginValidation } from '../middlewares/authValidation.js';
import { login } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signup' ,signupValidation, signup);
authRouter.post('/login' , loginValidation , login);

export default authRouter;