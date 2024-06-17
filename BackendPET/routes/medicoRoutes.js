import express from 'express';
import { getSolicitacoesMedico } from '../controllers/medicoController';
import { verifyToken, checkRole } from '../middleware/auth';

const router = express.Router();

router.get('/solicitacoes', verifyToken, checkRole(['Medico']), getSolicitacoesMedico);

export default router;
