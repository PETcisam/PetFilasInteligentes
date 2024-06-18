// Controlador para autenticação (login, registro).
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../config/constants';

export const login = (req, res) => {
  const { email, password } = req.body;
  const q = "SELECT * FROM usuarios WHERE email = ? AND password = ?";

  db.query(q, [email, password], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    if (data.length > 0) {
      const user = data[0];
      const accessToken = jwt.sign({ id: user.id, role: user.role }, ACCESS_TOKEN_SECRET);
      return res.status(200).json({ accessToken });
    } else {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
  });
};

export const register = (req, res) => {
  const { nome, email, password, cpf, role } = req.body;
  const values = [nome, email, password, cpf, role];

  const q = "INSERT INTO usuarios (`nome`, `email`, `password`, `cpf`, `role`) VALUES (?)";

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json({ msg: 'User registered successfully', data });
  });
};
