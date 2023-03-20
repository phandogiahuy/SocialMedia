import { user } from '../models/User.js';
import { generateAccessToken } from '../middleware/JWT.js';
import bcrypt from 'bcrypt';

class AuthController {
  //register
  async PostRegister(req, res) {
    try {
      //tạo mật khẩu mới
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.Password, salt);
      //tạo tài khoản
      const newUser = new user({
        username: req.body.UserName,
        email: req.body.Email,
        password: hashedPassword,
      });
      //save user vào database and response
      const User = await newUser.save();
      res.redirect('/auth/register');
    } catch (error) {
      res.json(error);
    }
  }
  async GetRegister(req, res) {
    res.render('register');
  }

  //login
  async PostLogin(req, res) {
    try {
      const uSer = await user.findOne({ email: req.body.email });
      !uSer && res.status(404).send('Email or Password is wrong');
      const validPassword = await bcrypt.compare(req.body.password, uSer.password);
      if (!validPassword) {
        res.status(404).send('Email or Password is wrong');
      } else {
        const accessToken = generateAccessToken(uSer);
        res.status(200).json({
          username: uSer.email,
          isAdmin: uSer.isAdmin,
          accessToken,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async GetLogin(req, res) {
    res.render('login');
  }
}
export var authController = new AuthController();
