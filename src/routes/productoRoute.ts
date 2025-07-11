
import express, { Request, Response } from 'express';
import { 
    listarProductos, 
    buscarProductoPorId, 
    agregarProducto, 
    modificarProducto, 
    eliminarProducto 
} from '../controllers/productoController';
import { authMiddleware } from '../auth/auth.middleware';
const route = express.Router();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Endpoints para gestionar productos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         id_producto:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Mouse inalámbrico
 *         descripcion:
 *           type: string
 *           example: Mouse ergonómico con conexión Bluetooth
 *         precio:
 *           type: number
 *           example: 25.99
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
 * /api/v1/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
route.get('/',authMiddleware, listarProductos);

/**
 * @swagger
 * /api/v1/productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
route.get('/:id',authMiddleware, buscarProductoPorId);

/**
 * @swagger
 * /api/v1/productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - precio
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Teclado mecánico
 *               descripcion:
 *                 type: string
 *                 example: Teclado mecánico retroiluminado RGB
 *               precio:
 *                 type: number
 *                 example: 75.5
 *               idProveedor:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 */
route.post('/',authMiddleware, agregarProducto);

/**
 * @swagger
 * /api/v1/productos/{id}:
 *   put:
 *     summary: Modificar un producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Teclado mecánico avanzado
 *               descripcion:
 *                 type: string
 *                 example: Teclado mecánico con switches intercambiables
 *               precio:
 *                 type: number
 *                 example: 85.0
 *     responses:
 *       200:
 *         description: Producto modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
route.put('/:id',authMiddleware, modificarProducto);

/**
 * @swagger
 * /api/v1/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
route.delete('/:id',authMiddleware, eliminarProducto);

export default route;