import express from 'express';
import { getSolicitacoesPaciente } from '../controllers/pacienteController';
import { verifyToken, checkRole } from '../middleware/auth';

const router = express.Router();

router.get('/solicitacoes', verifyToken, checkRole(['Paciente']), getSolicitacoesPaciente);

export default router;
