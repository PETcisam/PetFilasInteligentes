import { db } from '../config/db';

export const getSolicitacoesMedico = (req, res) => {
  const query = "SELECT prontuario, nome, cpf, status, prioridade, data, solicitacao, telefone, email FROM solicitacoes WHERE perfil = 'Medico'";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json(results);
  });
};
