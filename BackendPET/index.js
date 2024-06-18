import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from 'jsonwebtoken';
import authRoutes from './routes/authRoutes';
import medicoRoutes from './routes/medicoRoutes';
import pacienteRoutes from './routes/pacienteRoutes';
import adminRoutes from './routes/adminRoutes';
import gridRoutes from './routes/gridRoutes'; // Import the grid routes
import { authenticateToken, authorizeRoles } from './middleware/auth';
import { roles } from './config/roles';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Henr84989",
  database: "petcrud",
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/medico', authenticateToken, authorizeRoles(roles.MEDICO, roles.ADM, roles.ADM_MAXIMO), medicoRoutes);
app.use('/api/paciente', authenticateToken, authorizeRoles(roles.PACIENTE, roles.ADM, roles.ADM_MAXIMO), pacienteRoutes);
app.use('/api/admin', authenticateToken, authorizeRoles(roles.ADM, roles.ADM_MAXIMO), adminRoutes);
app.use('/api/grid', authenticateToken, authorizeRoles(roles.ADM_MAXIMO, roles.ADM, roles.MEDICO, roles.PACIENTE), gridRoutes); // Adicione a rota do grid

app.post("/register", (req, res) => {
  const { nome, email, password, cpf, role } = req.body;
  const values = [nome, email, password, String(cpf), role];
  const q = "INSERT INTO usuarios (`nome`, `email`, `password`, `cpf`, `role`) VALUES (?)";
  db.query(q, [values], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json({ msg: 'USUÁRIO REGISTRADO COM SUCESSO', data });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const q = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
  db.query(q, [email, password], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    if (data.length > 0) {
      const user = data[0];
      const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.ACCESS_TOKEN_SECRET);
      return res.status(200).json({ msg: 'LOGIN BEM SUCEDIDO', accessToken });
    } else {
      return res.status(401).json({ msg: 'CREDENCIAIS INVÁLIDAS' });
    }
  });
});

app.post("/cadastro", (req, res) => {
  const { nome, bairro, nomeMae, cidade, dataNascimento, numeroCNS, numeroProntuario, email, cep, cpf, ruaResidencia, numeroCelular, numeroResidencia, password, complemento } = req.body;
  const insertQuery = "INSERT INTO usuarios (nome, bairro, nomeMae, cidade, dataNascimento, numeroCNS, numeroProntuario, email, cep, cpf, ruaResidencia, numeroCelular, numeroResidencia, password, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [nome, bairro, nomeMae, cidade, dataNascimento, numeroCNS, numeroProntuario, email, cep, cpf, ruaResidencia, numeroCelular, numeroResidencia, password, complemento];
  db.query(insertQuery, values, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json({ msg: 'USUÁRIO REGISTRADO COM SUCESSO', data });
  });
});

app.get("/solicitacoes", authenticateToken, authorizeRoles(roles.ADM_MAXIMO, roles.ADM, roles.MEDICO, roles.PACIENTE), (req, res) => {
  const query = "SELECT prontuario, nome, cpf, status, prioridade, data, solicitacao, telefone, email FROM solicitacoes";
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json(results);
  });
});

app.listen(8800, () => {
  console.log("Rodando na porta 8800.");
});
