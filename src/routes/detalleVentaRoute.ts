import express, { Request, Response } from 'express';
import { 
    listarDetalles, 
    buscarDetallePorId, 
    agregarDetalle, 
    eliminarDetalle 
} from '../controllers/detalleVentaController';
import { authMiddleware } from '../auth/auth.middleware';
const route = express.Router();

/**
 * @swagger
 * tags:
 *   name: DetalleVenta
 *   description: Endpoints para gestionar detalles de venta
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DetalleVenta:
 *       type: object
 *       properties:
 *         idVenta:
 *           type: integer
 *           example: 5
 *         idProducto:
 *           type: integer
 *           example: 10
 *         cantidad:
 *           type: integer
 *           example: 2
 *         subtotal:
 *           type: number
 *           example: 50.5
 */

/**
 * @swagger
 * /api/v1/detalles:
 *   get:
 *     summary: Obtener todos los detalles de venta
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de detalles de venta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DetalleVenta'
 */
route.get('/',authMiddleware, listarDetalles);

/**
 * @swagger
 * /api/v1/detalles/{id}:
 *   get:
 *     summary: Obtener un detalle de venta por ID
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del detalle de venta
 *     responses:
 *       200:
 *         description: Detalle de venta encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetalleVenta'
 *       404:
 *         description: Detalle de venta no encontrado
 */
route.get('/:id',authMiddleware, buscarDetallePorId);

/**
 * @swagger
 * /api/v1/detalles:
 *   post:
 *     summary: Crear un nuevo detalle de venta
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetalleVentaInput'
 *     responses:
 *       201:
 *         description: Detalle de venta creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetalleVenta'
 */

route.post('/',authMiddleware, agregarDetalle);



/**
 * @swagger
 * /api/v1/detalles/{id}:
 *   delete:
 *     summary: Eliminar un detalle de venta
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del detalle de venta
 *     responses:
 *       200:
 *         description: Detalle de venta eliminado exitosamente
 *       404:
 *         description: Detalle de venta no encontrado
 */
route.delete('/:id',authMiddleware, eliminarDetalle);


export default route;