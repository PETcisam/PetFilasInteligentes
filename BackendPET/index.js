import express from "express";
import mysql from "mysql";
import cors from "cors";

// Configuração do servidor
const app = express();
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
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

// Rota de registro
app.post("/register", (req, res) => {
  const { nome, email, password, cpf } = req.body;
  const values = [nome, email, password, String(cpf)];

  const q = "INSERT INTO usuarios (`nome`, `email`, `password`, `cpf`) VALUES (?)";

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json({ msg: 'USUARIO REGISTRADO COM SUCESSO', data });
  });
});

// Rota de login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const q = "SELECT * FROM usuarios WHERE email = ? AND password = ?";

  db.query(q, [email, password], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    if (data.length > 0) {
      return res.status(200).json({ msg: 'LOGIN BEM SUCEDIDO', data });
    } else {
      return res.status(401).json({ msg: 'CREDENCIAIS INVÁLIDAS' });
    }
  });
});

// Rota de cadastro
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

// Rota para obter todos os usuários "Grid"
app.get("/usuarios", (req, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json(data);
  });
});

app.get("/solicitacoes", (req, res) => {
  const query = "SELECT prontuario, nome, cpf, status, prioridade, data, solicitacao, telefone, email FROM solicitacoes";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json(results);
  });
})

// Iniciando o servidor
app.listen(8800, () => {
  console.log("Rodando na porta 8800.");
});
