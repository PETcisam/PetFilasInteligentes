
import express from "express";
import mysql from "mysql";
import cors from "cors";

//express e cors sao libs usadas para interigir com uma api de varios dominios
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

//req: pega dados do front
//res: envia
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

//criar o get para o login




app.listen(8800, () => {
  console.log("Rodando na porta 8800.");
});