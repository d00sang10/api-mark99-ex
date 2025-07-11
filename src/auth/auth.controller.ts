import { Request, Response } from 'express'
import * as loginService from './auth.service'
import { STATUS_BAD_REQUEST, STATUS_UNAUTHORIZED } from "../shared/constants";
import { ResponseModel } from '../shared/responseModel';
import * as authService from './auth.service';
import { loginSchema, registerSchema } from '../schemas/auth.schema';

export const loginAuth = async (req: Request, res: Response): Promise<any> => {

    const { error, value } = loginSchema.validate(req.body);

    if (error) {
        return res
            .status(STATUS_BAD_REQUEST)
            .json(ResponseModel.error(error.details.map(e => e.message).join(','), STATUS_BAD_REQUEST));
    }

    const { username, password } = value;

    try {
        const token = await loginService.loginAuth(username, password);
        res.json(ResponseModel.success({ token }));
    } catch (error: any) {
        res.status(STATUS_UNAUTHORIZED).json(ResponseModel.error(error.message));
    }
};

export const register = async (req: Request, res: Response): Promise<any> => {

    const { error, value } = registerSchema.validate(req.body);

    if (error) {
        return res
            .status(STATUS_BAD_REQUEST)
            .json(ResponseModel.error(error.details.map(e => e.message).join(','), STATUS_BAD_REQUEST));
    }

    const { username, password } = value;
    
    try {
        const user = await authService.registerUser(username, password);
        res.json(ResponseModel.success(user));
    } catch (error: any) {
        res.status(400).json(ResponseModel.error(error.message));
    }
};


