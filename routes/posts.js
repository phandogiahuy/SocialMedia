//alt shift f de format lai code
import { Router } from 'express';
import { postController } from '../controller/PostController.js';
export const postRouter = Router();
import { verify } from '../middleware/JWT.js';

//create post
postRouter.post('/:id/create', verify, postController.create);
//update post
postRouter.put('/:id/update', verify, postController.update);
//delete post
postRouter.delete('/:id/delete', verify, postController.delete);
//like, dislike post
postRouter.put('/:id/like', verify, postController.react);
//get post
postRouter.get('/:id', verify, postController.post);
//get timelines post
postRouter.get('/timeline/all', verify, postController.allpost);
