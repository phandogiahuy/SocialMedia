import { Router } from 'express';
export const homeRouter = Router();

let Post = [
  {
    id: 1,
    name: 'Gia Huy',
    desc: 'Yue em',
    photo: '/api/public/image/Friend1.jpg',
    date: '5 min ago',
    userId: 1,
    like: 320,
    commnent: 19,
  },
  {
    id: 2,
    name: 'Gia Dũng',
    desc: 'Yue125em',
    photo: '/api/public/image/Ad.jpg',
    date: '5 min ago',
    userId: 1,
    like: 322,
    commnent: 29,
  },
  {
    id: 3,
    name: 'Gia Toàn',
    desc: 'Yue 125em',
    photo: '/api/public/image/birthday.jpg',
    date: '5 min ago',
    userId: 1,
    like: 321,
    commnent: 39,
  },
  {
    id: 4,
    name: 'Gia Khánh',
    desc: 'Yue 2362em',
    photo: '/api/public/image/DaiDien.jpg',
    date: '5 min ago',
    userId: 1,
    like: 342,
    commnent: 49,
  },
  {
    id: 5,
    name: 'Gia Bảo',
    desc: 'Yue22222 em',
    photo: '/api/public/image/Social.jpg',
    date: '5 min ago',
    userId: 1,
    like: 31,
    commnent: 59,
  },
];
let User = [
  {
    Name: 'GiaHuy',
    img: '/api/public/image/DaiDien.jpg',
  },
  {
    Name: 'GiaKhánh',
    img: '/api/public/image/Ad.jpg',
  },
  {
    Name: 'Gia Toàn',
    img: '/api/public/image/Social.jpg',
  },
  {
    Name: 'Bảo Thanh',
    img: '/api/public/image/birthday.jpg',
  },
  {
    Name: 'Đặng Nhân',
    img: '/api/public/image/Friend1.jpg',
  },
];
homeRouter.get('/', (req, res) => {
  res.render('home', { Post, User });
});
