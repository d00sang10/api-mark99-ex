import express, { Request, Response } from 'express';
import { agregarVenta, buscarVentaPorId, VentasPorCliente, eliminarVenta, listarVentas, modificarVenta } from '../controllers/ventaController';
import { authMiddleware } from '../auth/auth.middleware';
const route = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Endpoints para gestionar ventas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Venta:
 *       type: object
 *       properties:
 *         id_venta:
 *           type: integer
 *           example: 1
 *         id_cliente:
 *           type: integer
 *           example: 3
 *         fecha:
 *           type: string
 *           format: date-time
 *           example: '2024-07-02T15:30:00Z'
 *         total:
 *           type: number
 *           example: 150.75
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
 * /api/v1/ventas:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 */
route.get('/', authMiddleware, listarVentas);

/**
 * @swagger
 * /api/v1/ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 */
route.get('/:id', authMiddleware, buscarVentaPorId);

/**
 * @swagger
 * /api/v1/ventas:
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idCliente
 *               - total
 *             properties:
 *               idCliente:
 *                 type: integer
 *                 example: 3
 *               total:
 *                 type: number
 *                 example: 200.50
 *     responses:
 *       201:
 *         description: Venta creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 */
route.post('/', authMiddleware, agregarVenta);

/**
 * @swagger
 * /api/v1/ventas/{id}:
 *   put:
 *     summary: Modificar una venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total:
 *                 type: number
 *                 example: 220.00
 *     responses:
 *       200:
 *         description: Venta modificada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 */
route.put('/:id', authMiddleware, modificarVenta);

/**
 * @swagger
 * /api/v1/ventas/{id}:
 *   delete:
 *     summary: Eliminar una venta
 *     tags: [Ventas]
 *     ecurity:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta eliminada exitosamente
 *       404:
 *         description: Venta no encontrada
 */
route.delete('/:id', authMiddleware, eliminarVenta);

/**
 * @swagger
 * /api/v1/ventas/cliente/{id_cliente}:
 *   get:
 *     summary: Obtener todas las ventas de un cliente específico
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_cliente
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Lista de ventas del cliente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Cliente no encontrado o sin ventas
 */
route.get('/cliente/:id_cliente', authMiddleware, VentasPorCliente);


export default route;