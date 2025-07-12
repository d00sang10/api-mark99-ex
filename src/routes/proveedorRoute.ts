import express, { Router } from 'express';
import { 
  listarProveedores, 
  buscarProveedorPorId, 
  agregarProveedor, 
  modificarProveedor, 
  eliminarProveedor 
} from '../controllers/proveedorController';
import { authMiddleware } from '../auth/auth.middleware';

const route: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: Endpoints para gestionar proveedores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Proveedor:
 *       type: object
 *       properties:
 *         idProveedor:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Proveedor ABC S.A.C.
 *         contacto:
 *           type: string
 *           example: Juan Pérez
 *         email:
 *           type: string
 *           example: contacto@proveedorabc.com
 *         telefono:
 *           type: string
 *           example: +51 987654321
 *         estadoAuditoria:
 *           type: string
 *           example: "1"
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           example: "2025-07-11T15:30:00Z"
 *         fechaActualizacion:
 *           type: string
 *           format: date-time
 *           example: "2025-07-11T16:00:00Z"
 */

/**
 * @swagger
 * /api/v1/proveedores:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proveedor'
 */
route.get('/', authMiddleware, listarProveedores);

/**
 * @swagger
 * /api/v1/proveedores/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proveedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: Proveedor no encontrado
 */
route.get('/:id', authMiddleware, buscarProveedorPorId);

/**
 * @swagger
 * /api/v1/proveedores:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Proveedores]
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
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Proveedor XYZ 
 *               contacto:
 *                 type: string
 *                 example: María López
 *               telefono:
 *                 type: string
 *                 example: 912345678
 *               email:
 *                 type: string
 *                 example: maria@proveedorxyz.com
 *     responses:
 *       201:
 *         description: Proveedor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 */
route.post('/', authMiddleware, agregarProveedor);

/**
 * @swagger
 * /api/v1/proveedores/{id}:
 *   put:
 *     summary: Modificar un proveedor
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Proveedor Actualizado SAC
 *               contacto:
 *                 type: string
 *                 example: Pedro Ramírez
 *               telefono:
 *                 type: string
 *                 example: +51 987654321
 *               email:
 *                 type: string
 *                 example: pedro@proveedoractualizado.com
 *     responses:
 *       200:
 *         description: Proveedor modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: Proveedor no encontrado
 */
route.put('/:id', authMiddleware, modificarProveedor);

/**
 * @swagger
 * /api/v1/proveedores/{id}:
 *   delete:
 *     summary: Eliminar un proveedor
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proveedor eliminado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
route.delete('/:id', authMiddleware, eliminarProveedor);

export default route;