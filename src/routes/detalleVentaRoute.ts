import express, { Request, Response } from 'express';
import { 
    listarDetalles, 
    buscarDetallePorId, 
    agregarDetalle,  
    eliminarDetalle 
} from '../controllers/detalleVentaController';
import { authMiddleware } from '../auth/auth.middleware';
const route = express.Router();

route.get('/',authMiddleware,listarDetalles);
route.get('/:id',authMiddleware,buscarDetallePorId);
route.post('/',authMiddleware,agregarDetalle);
route.delete('/:id',authMiddleware,eliminarDetalle);

export default route;