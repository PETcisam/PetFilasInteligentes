//Controlador para operações de pacientes.
import mysql from 'mysql';
import { db } from '../config/db.js';  // Certifique-se de exportar o db da configuração

// Função para obter os dados do próprio paciente
export const getPatientData = (req, res) => {
  const userId = req.user.id;  // Supondo que o userId é passado no token

  const query = "SELECT nome, bairro, nomeMae, cidade, dataNascimento, numeroCNS, numeroProntuario, email, cep, cpf, ruaResidencia, numeroCelular, numeroResidencia, complemento FROM usuarios WHERE id = ?";

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    if (results.length > 0) {
      return res.status(200).json(results[0]);
    } else {
      return res.status(404).json({ msg: 'User not found' });
    }
  });
};
