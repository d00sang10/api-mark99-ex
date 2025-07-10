import express, { Request, Response } from 'express';
import {
    listarInventarios,
    buscarInventarioPorId,
    agregarInventario,
    modificarInventario
} from '../controllers/inventarioController';
const route = express.Router();

route.get('/',listarInventarios);
route.get('/:id',buscarInventarioPorId);
route.post('/',agregarInventario);
route.put('/:id',modificarInventario);

export default route;