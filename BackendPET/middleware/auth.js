import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants';

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ msg: 'Token is required' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

export const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.perfil)) {
      return res.status(403).json({ msg: 'Access denied' });
    }
    next();
  };
};
