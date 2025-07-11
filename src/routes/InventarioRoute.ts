import express, { Request, Response } from 'express';
import {
    listarInventarios,
    buscarInventarioPorId,
    agregarInventario,
    modificarInventario
} from '../controllers/inventarioController';
import { authMiddleware } from '../auth/auth.middleware';
const route = express.Router();

route.get('/',authMiddleware,listarInventarios);
route.get('/:id',authMiddleware,buscarInventarioPorId);
route.post('/',authMiddleware,agregarInventario);
route.put('/:id',authMiddleware,modificarInventario);

export default route;