import Joi from "joi"

export const inventarioCrearSchema = Joi.object({

    idProducto: Joi.number()
        .integer()
        .positive()
        .required()
        .allow(null)
        .messages({
            "number.base": "El campo 'idProducto' debe ser un número.",
            "number.integer": "El campo 'idProducto' debe ser un número entero.",
            "number.positive": "El campo 'idProducto' debe ser un número positivo.",
            "any.required": "El campo 'idProducto' es obligatorio."
        }),

    stock: Joi.number()
        .integer()
        .min(0)
        .required()
        .messages({
            "number.base": "El campo 'stock' debe ser un número.",
            "number.integer": "El campo 'stock' debe ser un número entero.",
            "number.min": "El campo 'stock' no puede ser negativo.",
            "any.required": "El campo 'stock' es obligatorio."
        })


});

export const inventarioActualizarSchema = Joi.object({

    idProducto: Joi.number()
        .integer()
        .positive()
        .allow(null)
        .messages({
            "number.base": "El campo 'idProducto' debe ser un número.",
            "number.integer": "El campo 'idProducto' debe ser un número entero.",
            "number.positive": "El campo 'idProducto' debe ser un número positivo.",
        }),

    stock: Joi.number()
        .integer()
        .min(0)
        .messages({
            "number.base": "El campo 'stock' debe ser un número.",
            "number.integer": "El campo 'stock' debe ser un número entero.",
            "number.min": "El campo 'stock' no puede ser negativo.",
        })


});