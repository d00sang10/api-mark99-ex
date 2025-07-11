import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from '../shared/constants';
import { ResponseModel } from '../shared/responseModel';
import { Request, Response } from 'express';
import * as productoService from '../services/productoService';
import { productoActualizarSchema, productoCrearSchema } from '../schemas/productoSchema';
export const listarProductos = async (req: Request, res: Response) => {
    console.log("productosController:: listarProductos");
    try {
        const response = await productoService.listarProductos();
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const buscarProductoPorId = async (req: Request, res: Response): Promise<any> => {
    console.log("productosController:: buscarProductoPorId");
    try {
        const { id } = req.params;
        const response = await productoService.buscarProductoPorId(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};
export const agregarProducto = async (req: Request, res: Response): Promise<any> => {
    console.log("productosController:: agregarProducto");

    const { error }: any = productoCrearSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const response = await productoService.agregarProducto(req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarProducto = async (req: Request, res: Response): Promise<any> => {

    console.log("productosController:: modificarProducto");

    const { error }: any = productoActualizarSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const { id } = req.params;
        const response = await productoService.modificarProducto(Number(id), req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}
export const eliminarProducto = async (req: Request, res: Response): Promise<any> => {
    console.log("productosController:: eliminarProducto");
    try {
        const { id } = req.params;
        const response = await productoService.eliminarProducto(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}
