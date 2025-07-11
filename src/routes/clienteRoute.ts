// {
//   "name": "proyecto_gestion",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "dev": "tsnd --respawn --clear src/server.ts",
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "npm run build && node dist/server.js",
//     "build": "tsc"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "description": "",
//   "devDependencies": {
//     "@types/cors": "^2.8.19",
//     "@types/dotenv": "^6.1.1",
//     "@types/express": "^5.0.3",
//     "@types/node": "^22.15.21",
//     "@types/swagger-jsdoc": "^6.0.4",
//     "@types/swagger-ui-express": "^4.1.8",
//     "prisma": "^6.11.0",
//     "ts-node-dev": "^2.0.0",
//     "typescript": "^5.8.3"
//   },
//   "dependencies": {
//     "@prisma/client": "^6.11.0",
//     "cors": "^2.8.5",
//     "dotenv": "^16.5.0",
//     "express": "^5.1.0",
//     "joi": "^17.13.3",
//     "swagger-jsdoc": "^6.2.8",
//     "swagger-ui-express": "^5.0.1"
//   }
// }



// import express, { Request, Response } from 'express';
// import { agregarClientes, buscarClientePorId, eliminarCliente, listarClientes, modificarCliente} from '../controllers/clienteController';
// const route = express.Router();

// route.get('/',listarClientes);
// route.get('/:id',buscarClientePorId);
// route.post('/',agregarClientes);
// route.put('/:id',modificarCliente);
// route.delete('/:id',eliminarCliente);

// export default route;


import express, { Request, Response } from 'express';
import { agregarClientes, buscarClientePorId, eliminarCliente, listarClientes, modificarCliente } from '../controllers/clienteController';
import { authMiddleware } from '../auth/auth.middleware';

const route = express.Router();


/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para gestionar clientes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         id_cliente:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Juan Pérez
 *         email:
 *           type: string
 *           example: juanp@gmail.com
 *         telefono:
 *           type: string
 *           example: '987654321'
 *         estado_auditoria:
 *           type: string
 *           example: '1'
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *           example: '2024-07-02T15:30:00Z'
 *         fecha_actualizacion:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: '2024-07-05T12:00:00Z'
 */

/**
 * @swagger
 * /api/v1/clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
route.get('/', authMiddleware, listarClientes);

/**
 * @swagger
 * /api/v1/clientes/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado
 */

route.get('/:id', authMiddleware,buscarClientePorId);

/**
 * @swagger
 * /api/v1/clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: María Torres
 *               email:
 *                 type: string
 *                 example: maria.torres@gmail.com
 *               telefono:
 *                 type: string
 *                 example: '912345678'
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 */

route.post('/', authMiddleware,agregarClientes);

/**
 * @swagger
 * /api/v1/clientes/{id}:
 *   put:
 *     summary: Modificar un cliente existente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Luis Gómez
 *               email:
 *                 type: string
 *                 example: luisg@hotmail.com
 *               telefono:
 *                 type: string
 *                 example: '955112233'
 *     responses:
 *       200:
 *         description: Cliente modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado
 */
route.put('/:id', authMiddleware,modificarCliente);

/**
 * @swagger
 * /api/v1/clientes/{id}:
 *   delete:
 *     summary: Eliminar un cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 *       404:
 *         description: Cliente no encontrado
 */
route.delete('/:id',authMiddleware, eliminarCliente);

export default route;