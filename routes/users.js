//alt shift f de format lai code
import { Router } from 'express';
import { userController } from '../controller/UserController.js';
import { verify } from '../middleware/JWT.js';
export const userRouter = Router();

//update user
userRouter.put('/:id', verify, userController.update);
//delete user
userRouter.delete('/:id', verify, userController.delete);
//get a user
userRouter.get('/:id', verify, userController.getUser);
//follow user
userRouter.put('/:id/follow', verify, userController.follow);
//unfollow user
userRouter.put('/:id/unfollow', verify, userController.unfollow);
