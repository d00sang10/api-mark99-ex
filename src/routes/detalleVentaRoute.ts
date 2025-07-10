import express, { Request, Response } from 'express';
import { 
    listarDetalles, 
    buscarDetallePorId, 
    agregarDetalle, 
    modificarDetalle, 
    eliminarDetalle 
} from '../controllers/detalleVentaController';
const route = express.Router();

route.get('/',listarDetalles);
route.get('/:id',buscarDetallePorId);
route.post('/',agregarDetalle);
route.put('/:id',modificarDetalle);
route.delete('/:id',eliminarDetalle);

export default route;