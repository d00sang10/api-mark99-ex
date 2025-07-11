
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

route.get('/',authMiddleware,listarProductos);
route.get('/:id',authMiddleware,buscarProductoPorId);
route.post('/',authMiddleware,agregarProducto);
route.put('/:id',authMiddleware,modificarProducto);
route.delete('/:id',authMiddleware,eliminarProducto);

export default route;