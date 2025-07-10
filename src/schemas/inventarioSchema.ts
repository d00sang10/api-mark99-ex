// import Joi from "joi"

// export const inventarioCrearSchema = Joi.object({
//     idProducto:Joi.number().integer().required().positive().messages({
//         "number.base": "El campo 'idProducto' debe ser un número.",
//         "number.integer": "El campo 'idProducto' debe ser un número entero.",
//         "number.positive": "El campo 'id_producto' debe ser un número positivo.",
//         "any.required": "El campo 'idProducto' es obligatorio."
//     }),
//     stock:Joi.number().integer().positive().required().messages({
//         "number.base": "El campo 'stock' debe ser un número.",
//         "number.integer": "El campo 'stock' debe ser un número entero.",
//         "number.positive": "El campo 'stock' debe ser mayor que cero.",
//         "any.required": "El campo 'stock' es obligatorio."
//     }),

// })

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

