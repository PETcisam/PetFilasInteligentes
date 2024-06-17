import express from 'express';
import { getSolicitacoesAdmin } from '../controllers/adminController';
import { verifyToken, checkRole } from '../middleware/auth';

const router = express.Router();

router.get('/solicitacoes', verifyToken, checkRole(['Administrador']), getSolicitacoesAdmin);

export default router;
