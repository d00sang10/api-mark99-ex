
import express, { Request, Response } from 'express';
import { 
    listarProductos, 
    buscarProductoPorId, 
    agregarProducto, 
    modificarProducto, 
    eliminarProducto 
} from '../controllers/productoController';
const route = express.Router();

route.get('/',listarProductos);
route.get('/:id',buscarProductoPorId);
route.post('/',agregarProducto);
route.put('/:id',modificarProducto);
route.delete('/:id',eliminarProducto);

export default route;