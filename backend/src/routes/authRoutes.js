import express from 'express';
import { signup } from '../controllers/authController.js';
import { signupValidation } from '../middlewares/authValidation.js';

const authRouter = express.Router();

authRouter.post('/signup' ,signupValidation, signup);
//authRouter.post('/login');

export default authRouter;