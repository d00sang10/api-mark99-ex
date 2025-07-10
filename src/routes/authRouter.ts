import express, { Router } from "express";
import { loginAuth, register } from "../auth/auth.controller";

const router: Router = express.Router();

// /**
//  * @swagger
//  * /api/v1/auth:
//  *   post:
//  *     summary: Iniciar sesión
//  *     tags: [Auth]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - username
//  *               - password
//  *             properties:
//  *               username:
//  *                 type: string
//  *                 example: "admin"
//  *               password:
//  *                 type: string
//  *                 format: password
//  *                 example: "admin123"
//  *     responses:
//  *       200:
//  *         description: Autenticación exitosa, devuelve el token JWT
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 success:
//  *                   type: boolean
//  *                   example: true
//  *                 message:
//  *                   type: string
//  *                   example: "Operación exitosa"
//  *                 data:
//  *                   type: object
//  *                   properties:
//  *                     token:
//  *                       type: string
//  *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
//  *       400:
//  *         description: Error de validación (faltan campos)
//  *       401:
//  *         description: Credenciales inválidas
//  */
router.post('/login', loginAuth);
router.post('/register', register); 

export default router;














// import express, { Router } from 'express';
// import { loginAuth } from '../auth/auth.controller';

// const route : Router = express.Router();

// route.post('/',loginAuth);

// export default route;
