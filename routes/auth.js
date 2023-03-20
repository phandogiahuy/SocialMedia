//alt shift f de format lai code
import { Router } from 'express';
import { authController } from '../controller/AuthController.js';
export const authRouter = Router();
//register
authRouter.get('/register', authController.GetRegister);
authRouter.post('/register', authController.PostRegister);
//;
authRouter.get('/login', authController.GetLogin);
authRouter.post('/login', authController.PostLogin);
