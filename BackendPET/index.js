import express from "express";
import mysql from "mysql";
import cors from "cors";

// Configuração do servidor
const app = express();
app.use(cors());
app.use(express.json());

console.log('chegou');

// Configuração do banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "admnutes",
  password: "admin@@24@#nutes",
  database: "gestaonutes",
  port: 3306,
});




db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});



// Iniciando o servidor
app.listen(8083, () => {
  console.log("Rodando na porta 8082.");
});