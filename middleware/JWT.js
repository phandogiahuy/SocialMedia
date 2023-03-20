import Jwt from 'jsonwebtoken';

export const generateAccessToken = (users) => {
  return Jwt.sign({ id: users.email, password: users.password }, 'mySecretKey', {
    expiresIn: '15m',
  });
};

export const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    Jwt.verify(token, 'mySecretKey', (err, users) => {
      if (err) {
        return res.status(400).json('token not veryfy');
      }
      req.users = users;
      next();
    });
  } else {
    res.status(400).json('you are not vertify');
  }
};
