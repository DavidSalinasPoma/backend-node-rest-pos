
import { tokenValidation } from './../middleware/validateToken';
import { Router } from 'express';

// Metodos del Controlador Usuarios
import { indexUsuarios, showUsuario } from '../controllers/usuario.controller';

const router: Router = Router();

router.get('/usuarios', indexUsuarios);
router.get('/usuarios/:id', showUsuario);

export default router;
