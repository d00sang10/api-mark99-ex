import express, { Request, Response, Router } from 'express';
import { agregarProveedor, buscarProveedorPorId, eliminarProveedor, listarProveedores, modificarProveedor } from '../controllers/proveedorController';
import { authMiddleware } from '../auth/auth.middleware';

const route: Router = express.Router();

/** 
 * @swagger
 * tags:
 *   - name: Proveedores
 *     description: Gestion Proveedores
 */


/**
 * @swagger
 * /api/v1/proveedores:
 *   get:
 *     summary: Listar todos los Proveedores
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida correctamente
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
 *         description: ID del proveedor a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proveedor obtenido correctamente
 */
route.get('/:id', authMiddleware, buscarProveedorPorId);

/**
 * @swagger
 * /api/v1/proveedores:
 *   post:
 *     summary: Crear un nuevo Proveedor
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               contacto:
 *                  type: string
 *               telefono:
 *                  type: string
 *               email:
 *                  type: string
 *     responses:
 *       201:
 *         description: Proveedor creado correctamente
 */
route.post('/', authMiddleware, agregarProveedor);

/**
 * @swagger
 * /api/v1/proveedores/{id}:
 *   put:
 *     summary: Modificar un Proveedor
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               contacto:
 *                  type: string
 *               telefono:
 *                  type: string
 *               email:
 *                  type: string
 *     responses:
 *       200:
 *         description: Proveedor modificado
 */
route.put('/:id', authMiddleware, modificarProveedor);

/**
 * @swagger
 * /api/v1/proveedores/{id}:
 *   delete:
 *     summary: Eliminar un Proveedor
 *     tags: [Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Eliminado correctamente
 */
route.delete('/:id', authMiddleware, eliminarProveedor);

export default route;