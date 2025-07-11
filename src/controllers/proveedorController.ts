import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { ResponseModel } from "../shared/responseModel";
import { Request, Response } from "express";
import * as proveedorSevice from "../services/ProveedorService";
import { proveedorActualizarSchema, proveedorCrearSchema } from "../schemas/proveedorSchema";

export const listarProveedores = async (req: Request, res: Response): Promise<any> => {

    console.log("proveedorController: listarProveedores");
    try {
        const response = await proveedorSevice.listarProveedores();
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const buscarProveedorPorId = async (req: Request, res: Response): Promise<any> => {

    console.log("proveedorController: buscarProveedorPorId");

    try {
        const { id } = req.params;
        const response = await proveedorSevice.buscarProveedorPorId(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const agregarProveedor = async (req: Request, res: Response): Promise<any> => {

    console.log("proveedorController: agregarProveedor");

    const { error }: any = proveedorCrearSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const response = await proveedorSevice.agregarProveedor(req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const modificarProveedor = async (req: Request, res: Response): Promise<any> => {

    console.log("proveedorController: modificarProveedor");

    const { error }: any = proveedorActualizarSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    
    try {
        const { id } = req.params;
        const response = await proveedorSevice.modificarProveedor(Number(id), req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};


export const eliminarProveedor = async (req: Request, res: Response): Promise<any> => {

    console.log("proveedorController: eliminarProveedor");

    try {
        const { id } = req.params;
        const response = await proveedorSevice.eliminarProveedor(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};