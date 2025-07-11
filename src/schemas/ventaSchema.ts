import Joi from "joi"


export const ventaCrearSchema = Joi.object({

    idCliente: Joi
        .number()
        .integer()
        .positive()
        .required()
        .allow(null)
        .messages({
            "number.base": "El campo 'idCliente' debe ser un número.",
            "number.integer": "El campo 'idCliente' debe ser un número entero.",
            "number.positive": "El campo 'idCliente' debe ser un número positivo.",
            "any.required": "El campo 'idCliente' es obligatorio."
        }),

    total: Joi
        .number()
        .positive()
        .required()
        .messages({
            "number.base": "El campo 'total' debe ser un número.",
            "number.positive": "El campo 'total' debe ser un número positivo.",
            "any.required": "El campo 'total' es obligatorio."
        })

});

export const ventaActualizarSchema = Joi.object({

    idCliente: Joi
        .number()
        .integer()
        .positive()
        .allow(null)
        .messages({
            "number.base": "El campo 'id_cliente' debe ser un número.",
            "number.integer": "El campo 'id_cliente' debe ser un número entero.",
            "number.positive": "El campo 'id_cliente' debe ser un número positivo.",
        }),

    total: Joi
        .number()
        .positive()
        .messages({
            "number.base": "El campo 'total' debe ser un número.",
            "number.positive": "El campo 'total' debe ser un número positivo.",
        })
});