import Joi from "joi"

export const detalleVentaCrearSchema = Joi.object({

  idVenta: Joi
    .number()
    .integer()
    .positive()
    .required()
    .allow(null)
    .messages({
      "number.base": "El campo 'id_venta' debe ser un número.",
      "number.integer": "El campo 'id_venta' debe ser un número entero.",
      "number.positive": "El campo 'id_venta' debe ser un número positivo.",
      "any.required": "El campo 'idVenta' es obligatorio."
    }),

  idProducto: Joi
    .number()
    .integer()
    .positive()
    .required()
    .allow(null)
    .messages({
      "number.base": "El campo 'id_producto' debe ser un número.",
      "number.integer": "El campo 'id_producto' debe ser un número entero.",
      "number.positive": "El campo 'id_producto' debe ser un número positivo.",
      "any.required": "El campo 'idProducto' es obligatorio."
    }),

  cantidad: Joi
    .number()
    .positive()
    .precision(2)
    .required()
    .messages({
      "number.base": "El campo 'cantidad' debe ser un número.",
      "number.positive": "El campo 'cantidad' debe ser un número positivo.",
      "number.precision": "El campo 'cantidad' debe tener como máximo 2 decimales.",
      "any.required": "El campo 'cantidad' es obligatorio."
    })
});

export const detalleVentaActualizarSchema = Joi.object({

  idVenta: Joi
    .number()
    .integer()
    .positive()
    .allow(null)
    .messages({
      "number.base": "El campo 'id_venta' debe ser un número.",
      "number.integer": "El campo 'id_venta' debe ser un número entero.",
      "number.positive": "El campo 'id_venta' debe ser un número positivo.",
    }),

  idProducto: Joi
    .number()
    .integer()
    .positive()
    .allow(null)
    .messages({
      "number.base": "El campo 'id_producto' debe ser un número.",
      "number.integer": "El campo 'id_producto' debe ser un número entero.",
      "number.positive": "El campo 'id_producto' debe ser un número positivo.",
    }),

  cantidad: Joi
    .number()
    .positive()
    .precision(2)
    .messages({
      "number.base": "El campo 'cantidad' debe ser un número.",
      "number.positive": "El campo 'cantidad' debe ser un número positivo.",
      "number.precision": "El campo 'cantidad' debe tener como máximo 2 decimales.",
    })
});
