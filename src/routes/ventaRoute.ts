import express, { Request, Response } from 'express';
import { agregarVenta, buscarVentaPorId, VentasPorCliente, eliminarVenta, listarVentas, modificarVenta } from '../controllers/ventaController';
const route = express.Router();

route.get('/',listarVentas);
route.get('/:id',buscarVentaPorId);
route.post('/',agregarVenta);
route.put('/:id',modificarVenta);
route.delete('/:id',eliminarVenta);
route.get('/cliente/:id_cliente',VentasPorCliente);

export default route;