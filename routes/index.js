import { userRouter } from './users.js';
import { authRouter } from './auth.js';
import { postRouter } from './posts.js';
import { homeRouter } from './home.js';
export function Route(app) {
  app.use('', homeRouter);
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/posts', postRouter);
}
