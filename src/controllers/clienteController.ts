import { Request, Response } from 'express';
import * as clienteService from '../services/clienteService';
import { ResponseModel } from '../shared/responseModel';
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from '../shared/constants';
import { clienteActualizarSchema, clienteCrearSchema } from '../schemas/clienteSchema';

export const listarClientes = async (req: Request, res: Response): Promise<any> => {
    console.log("controllers/cliente.controller.ts: listarClientes");

    try {
        const response = await clienteService.listarClientes();
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};


export const buscarClientePorId = async (req: Request, res: Response): Promise<any> => {
    console.log("cliente.controller.ts: buscarClientePorId");

    try {
        const { id } = req.params;
        const response = await clienteService.buscarClientePorId(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};

export const agregarClientes = async (req: Request, res: Response): Promise<any> => {
    console.log("controllers/cliente.controller.ts: agregarClientes");
    const { error }: any = clienteCrearSchema.validate(req.body);
    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
    try {
        const response = await clienteService.agregarClientes(req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarCliente = async (req: Request, res: Response): Promise<any> => {
    console.log("controllers/cliente.controller.ts: modificarCliente");

    const { error }: any = clienteActualizarSchema.validate(req.body);

    if (error) {
        return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }

    try {
        const { id } = req.params;
        const response = await clienteService.modificarCliente(Number(id), req.body);
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }

};

export const eliminarCliente = async (req: Request, res: Response): Promise<any> => {
    console.log("controllers/cliente.controller.ts: eliminarCliente");
    try {
        const { id } = req.params;
        const response = await clienteService.eliminarCliente(Number(id));
        res.json(ResponseModel.success(response));
    }
    catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
};


