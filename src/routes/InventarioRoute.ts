import express, { Request, Response } from 'express';
import {
    listarInventarios,
    buscarInventarioPorId,
    agregarInventario,
    modificarInventario
} from '../controllers/inventarioController';
import { authMiddleware } from '../auth/auth.middleware';
const route = express.Router();

/**
 * @swagger
 * tags:
 *   name: Inventario
 *   description: Endpoints para gestionar inventario
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Inventario:
 *       type: object
 *       properties:
 *         id_inventario:
 *           type: integer
 *           example: 1
 *         id_producto:
 *           type: integer
 *           example: 5
 *         cantidad:
 *           type: integer
 *           example: 20
 *         fecha_actualizacion:
 *           type: string
 *           format: date-time
 *           example: '2024-07-05T12:00:00Z'
 */

/**
 * @swagger
 * /api/v1/inventarios:
 *   get:
 *     summary: Obtener todos los registros de inventario
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de inventario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventario'
 */
route.get('/',authMiddleware, listarInventarios);

/**
 * @swagger
 * /api/v1/inventarios/{id}:
 *   get:
 *     summary: Obtener inventario por ID
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del inventario
 *     responses:
 *       200:
 *         description: Inventario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventario'
 *       404:
 *         description: Inventario no encontrado
 */
route.get('/:id',authMiddleware, buscarInventarioPorId);

/**
 * @swagger
 * /api/v1/inventarios:
 *   post:
 *     summary: Crear un nuevo registro de inventario
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_producto
 *               - cantidad
 *             properties:
 *               idProducto:
 *                 type: integer
 *                 example: 5
 *               cantidad:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       201:
 *         description: Inventario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventario'
 */
route.post('/',authMiddleware, agregarInventario);

/**
 * @swagger
 * /api/v1/inventarios/{id}:
 *   put:
 *     summary: Modificar un registro de inventario
 *     tags: [Inventario]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del inventario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: integer
 *                 example: 25
 *     responses:
 *       200:
 *         description: Inventario modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventario'
 *       404:
 *         description: Inventario no encontrado
 */
route.put('/:id',authMiddleware ,modificarInventario);

export default route;