//Rotas específicas para médicos.
import express from 'express';
import { getAllPatients } from '../controllers/medicoController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { roles } from '../config/roles.js';

const router = express.Router();

// Rota para obter todos os pacientes - apenas médicos e admins
router.get('/pacientes', authenticateToken, authorizeRoles(roles.MEDICO, roles.ADM, roles.ADM_MAXIMO), getAllPatients);

export default router;
