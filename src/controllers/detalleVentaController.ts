import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from '../shared/constants';
import { ResponseModel } from '../shared/responseModel';
import { Request, Response } from 'express';
import * as detalleVentaService from '../services/detalleVentaService';
import { detalleVentaCrearSchema } from '../schemas/detalleVentaSchema';

export const listarDetalles = async (req: Request, res: Response): Promise<any> => {
    console.log("detalleVentaController:: listarDetalles");
    try {
        const response = await detalleVentaService.listarDetalles();
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const buscarDetallePorId = async (req: Request, res: Response): Promise<any> => {
    console.log("detalleVentaController:: buscarDetallePorId");
    try {
        const { id } = req.params;
        const response = await detalleVentaService.buscarDetallePorId(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}
export const agregarDetalle = async (req: Request, res: Response): Promise<any> => {

    console.log("detalleVentaController:: agregarDetalle");

    const { error }: any = detalleVentaCrearSchema.validate(req.body);
    
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const response = await detalleVentaService.agregarDetalle(req.body);
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarDetalle = async (req: Request, res: Response): Promise<any> => {
    console.log("detalleVentaController:: eliminarDetalle");
    try {
        const { id } = req.params;
        const response = await detalleVentaService.eliminarDetalle(Number(id));
        res.json(ResponseModel.success(response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}