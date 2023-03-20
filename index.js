//alt shift f de format lai code
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { Route } from './routes/index.js';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
const app = express();

app.use(methodOverride('_method'));
//MiddleWare to handle POST method
app.use(express.urlencoded({ extended: true }));
//midleware
app.use(express.json());
app.use('*/css', express.static('public/css'));
app.use('*/image', express.static('public/image'));

app.use(helmet());
app.use(morgan('combined'));

//template
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', '.hbs');
app.set('views', 'view');

dotenv.config();
try {
  mongoose.connect(process.env.MONGO_URL);
  console.log('successful');
} catch (error) {
  console.log('fail');
}

//định hướng người dùng, nếu đường dẫn này sẽ vào..

Route(app);
const port = 7000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
