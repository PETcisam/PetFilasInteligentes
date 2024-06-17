//importando da pasta config/db.js ajeitar dps
import { db } from '../config/db';

export const getSolicitacoesAdmin = (req, res) => {
  const query = "SELECT prontuario, nome, cpf, status, prioridade, data, solicitacao, telefone, email FROM solicitacoes";

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ msg: 'Database error', error: err });
    }
    return res.status(200).json(results);
  });
};
