//Rotas específicas para pacientes.
import express from 'express';
import { getPatientData } from '../controllers/pacienteController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { roles } from '../config/roles.js';

const router = express.Router();

// Rota para obter os dados do próprio paciente
router.get('/me', authenticateToken, authorizeRoles(roles.PACIENTE, roles.ADM, roles.ADM_MAXIMO), getPatientData);

export default router;
