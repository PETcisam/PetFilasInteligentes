//Controlador para operações gerais de usuários.
import db from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret';

export const registerUser = async (req, res) => {
  const { nome, email, password, cpf, perfil } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [nome, email, hashedPassword, String(cpf), perfil];

  const q = "INSERT INTO usuarios (`nome`, `email`, `password`, `cpf`, `perfil`) VALUES (?)";

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json({ msg: 'USUARIO REGISTRADO COM SUCESSO', data });
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const q = "SELECT * FROM usuarios WHERE email = ?";

  db.query(q, [email], async (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    if (data.length === 0 || !await bcrypt.compare(password, data[0].password)) {
      return res.status(401).json({ msg: 'CREDENCIAIS INVÁLIDAS' });
    }

    const token = jwt.sign({ id: data[0].id, email: data[0].email, perfil: data[0].perfil }, JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ msg: 'LOGIN BEM SUCEDIDO', token });
  });
};
