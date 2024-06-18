//Controlador para operações de médicos.
import mysql from 'mysql';
import { db } from '../config/db.js';  // Certifique-se de exportar o db da configuração

// Função para obter todos os pacientes
export const getAllPatients = (req, res) => {
  const query = "SELECT nome, bairro, nomeMae, cidade, dataNascimento, numeroCNS, numeroProntuario, email, cep, cpf, ruaResidencia, numeroCelular, numeroResidencia, complemento FROM usuarios WHERE role = 'PACIENTE'";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json(results);
  });
};
