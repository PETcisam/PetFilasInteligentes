// Rotas específicas para administradores.
import express from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/adminController';

const router = express.Router();

router.use(authenticateToken);

router.get('/', authorizeRoles('adm', 'adm_maximo'), getAllUsers);
router.post('/', authorizeRoles('adm_maximo'), createUser);
router.put('/:id', authorizeRoles('adm_maximo'), updateUser);
router.delete('/:id', authorizeRoles('adm_maximo'), deleteUser);

export default router;
