import { tokenValidation } from './../middleware/validateToken';
import { Router } from 'express';

// Metodos del Controlador Auth
import { profile, signin, signup, prueba, generarPrecio } from '../controllers/auth.controller';

const router: Router = Router();


// RUTA CONTROLADOR DE PRUEBA
router.get('/prueba', prueba)
// FIN RUTA CONTROLADOR DE PRUEBA



// RUTAS DEL CONTROLADOR - AUTH.CONTROLLER
router.post('/signup', signup);

router.post('/signin', signin);

/**
 * 1.-'/profile': Es la ruta
 * 2.-tokenValidation: middleware
 * 2.-profile: Es el controlador asosciado a esta ruta
 */
router.get('/profile', tokenValidation, profile);


// Algoritmo para generar cuentas
router.get('/generar', generarPrecio);

// FIN RUTAS DEL CONTROLADOR - AUTH.CONTROLLER

export default router;