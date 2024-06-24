import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mysql from 'mysql';
import { roles } from '../config/roles';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Henr84989",
  database: "petcrud",
});

export const register = (req, res) => {
  const { nome, email, password, cpf, role } = req.body;

  if (!nome || !email || !password || !cpf || !role) {
    return res.status(400).json({ msg: 'Todos os campos são obrigatórios' });
  }

  if (role === 'ADM_MAXIMO') {
    return res.status(403).json({ msg: 'Não é permitido registrar como ADM_MAXIMO' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const q = "INSERT INTO usuarios (`nome`, `email`, `password`, `cpf`, `role`) VALUES (?, ?, ?, ?, ?)";
  db.query(q, [nome, email, hashedPassword, cpf, role], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json({ msg: 'USUÁRIO REGISTRADO COM SUCESSO', data });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  const q = "SELECT * FROM usuarios WHERE email = ?";
  db.query(q, [email], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    if (data.length > 0) {
      const user = data[0];
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.ACCESS_TOKEN_SECRET);
          return res.status(200).json({ msg: 'LOGIN BEM SUCEDIDO', accessToken });
        } else {
          return res.status(401).json({ msg: 'CREDENCIAIS INVÁLIDAS' });
        }
      });
    } else {
      return res.status(401).json({ msg: 'CREDENCIAIS INVÁLIDAS' });
    }
  });
};
