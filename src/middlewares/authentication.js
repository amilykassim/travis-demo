import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded;

    next();
  } catch (ex) {
    res.status(400).json({ status: res.statusCode, error: 'Invalid token' });
  }
};
