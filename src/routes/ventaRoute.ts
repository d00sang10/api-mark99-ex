import express, { Request, Response } from 'express';
import { agregarVenta, buscarVentaPorId, VentasPorCliente, eliminarVenta, listarVentas, modificarVenta } from '../controllers/ventaController';
import { authMiddleware } from '../auth/auth.middleware';
const route = express.Router();

route.get('/',authMiddleware,listarVentas);
route.get('/:id',authMiddleware,buscarVentaPorId);
route.post('/',authMiddleware,agregarVenta);
route.put('/:id',authMiddleware,modificarVenta);
route.delete('/:id',authMiddleware,eliminarVenta);
route.get('/cliente/:id_cliente',authMiddleware,VentasPorCliente);

export default route;