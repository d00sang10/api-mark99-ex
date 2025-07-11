import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { Request, Response } from "express";
import * as inventarioService from "../services/inventarioService";
import { ResponseModel } from "../shared/responseModel";
import { inventarioActualizarSchema, inventarioCrearSchema } from "../schemas/inventarioSchema";
export const listarInventarios = async (req: Request, res: Response): Promise<any> => {
    console.log("inventarioController: listarInventarios");
    try {
        const response = await inventarioService.listarInventarios();
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const buscarInventarioPorId = async (req: Request, res: Response): Promise<any> => {

    console.log("inventarioController: buscarInventarioPorId");

    try {
        const { id } = req.params;
        const response = await inventarioService.buscarInventarioPorId(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const agregarInventario = async (req: Request, res: Response): Promise<any> => {

    console.log("inventarioController: agregarInventario");

    const { error }: any = inventarioCrearSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const response = await inventarioService.agregarInventario(req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const modificarInventario = async (req: Request, res: Response): Promise<any> => {

    console.log("inventarioController: modificarInventario");

    const { error }: any = inventarioActualizarSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const { id } = req.params;
        const response = await inventarioService.modificarInventario(Number(id), req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};
