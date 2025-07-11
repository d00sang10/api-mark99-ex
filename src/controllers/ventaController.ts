import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { ResponseModel } from "../shared/responseModel";
import { Request, Response } from "express";
import * as ventaService from "../services/ventaService";
import { ventaActualizarSchema, ventaCrearSchema } from '../schemas/ventaSchema';

export const listarVentas = async (req: Request, res: Response): Promise<any> => {
    console.log("ventaController:: listarVentas");
    try {
        const response = await ventaService.listarVentas();
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const buscarVentaPorId = async (req: Request, res: Response): Promise<any> => {
    console.log("ventaController:: buscarVentaPorId");
    try {
        const { id } = req.params;
        const response = await ventaService.buscarVentaPorId(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const agregarVenta = async (req: Request, res: Response): Promise<any> => {

    console.log("ventaController:: agregarVenta");

    const { error }: any = ventaCrearSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const response = await ventaService.agregarVenta(req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}


export const modificarVenta = async (req: Request, res: Response): Promise<any> => {

    console.log("ventaController:: modificarVenta");

    const { error }: any = ventaActualizarSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const { id } = req.params;
        const response = await ventaService.modificarVenta(Number(id), req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarVenta = async (req: Request, res: Response): Promise<any> => {
    console.log("ventaController:: eliminarVenta");
    try {
        const { id } = req.params;
        const response = await ventaService.eliminarVenta(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const VentasPorCliente = async (req: Request, res: Response): Promise<any> => {
    console.log("ventaController:: buscarVentasPorCliente");
    try {
        const { id_cliente } = req.params;
        const response = await ventaService.listarVentasPorCliente(Number(id_cliente));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}