import Response from 'express';
import { STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from './constants';


export class ResponseModel {

    constructor(public succsess: boolean,public message: string,public status: number,public data?: any) {
    }

    // Satatic significa que se puede llamar sin instanciar la clase
    // se usa para crear respuestas de éxito y error
    // data es opcional, puede ser null o undefined
    // se puede usar para enviar datos adicionales en la respuesta
    // message es un mensaje de éxito o error
    // status es el código de estado HTTP
    // succsess indica si la respuesta es exitosa o no
    // example: ResponseModel.success({ id: 1, name: 'Documento' }, 'Tipo de documento creado correctamente');
    // example: ResponseModel.error('Error al crear el tipo de documento', 500);
    static success(data: any, message: string = 'OK'){
        return new ResponseModel(true, message,STATUS_OK, data);
    }

    static error(message: string, status: number = STATUS_INTERNAL_SERVER_ERROR) {
        return new ResponseModel(false, message, status, null);
    }
}