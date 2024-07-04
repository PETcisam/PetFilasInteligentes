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



// Iniciando o servidor
app.listen(8800, () => {
  console.log("Rodando na porta 8800.");
});