import Joi from "joi"

export const productoCrearSchema = Joi.object({

  nombre: Joi
    .string()
    .trim()
    .min(5)
    .max(20)
    .required()
    .messages({
      "string.base": "El campo 'nombre' debe ser un texto.",
      "string.empty": "El campo 'nombre' no puede estar vacío.",
      "string.min": "En el campo 'nombre' al menos 5 caracteres",
      "string.max": "El campo 'nombre' debe tener como máximo 20 caracteres.",
      "any.required": "El campo 'nombre' es obligatorio."
    }),

  descripcion: Joi
    .string()
    .trim()
    .min(5)
    .messages({
      "string.base": "El campo 'descripcion' debe ser un texto.",
      "string.empty": "El campo 'descripcion' no puede estar vacío.",
      "string.min": "En el campo 'descripcion' al menos 5 caracteres",
      "string.max": "El campo 'descripcion' debe tener como máximo 20 caracteres.",
      "any.required": "El campo 'descripcion' es obligatorio."
    }),

  precio: Joi.number()
    .positive()
    .precision(2)
    .required()
    .messages({
      "number.base": "El campo 'precio' debe ser un número.",
      "number.positive": "El campo 'precio' debe ser un número positivo.",
      "number.precision": "El campo 'precio' debe tener como máximo 2 decimales.",
      "any.required": "El campo 'precio' es obligatorio."
    }),

  idProveedor: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .required()
    .messages({
      "number.base": "El campo 'id_proveedor' debe ser un número.",
      "number.integer": "El campo 'id_proveedor' debe ser un número entero.",
      "number.positive": "El campo 'id_proveedor' debe ser un número positivo.",
      "any.required": "El campo 'id_proveedor' no puede estar vacío."
    })

});

export const productoActualizarSchema = Joi.object({

  nombre: Joi
    .string()
    .trim()
    .min(5)
    .max(20)
    .messages({
      "string.base": "El campo 'nombre' debe ser un texto.",
      "string.empty": "El campo 'nombre' no puede estar vacío.",
      "string.min": "En el campo 'nombre' al menos 5 caracteres",
      "string.max": "El campo 'nombre' debe tener como máximo 20 caracteres.",
      "any.required": "El campo 'nombre' es obligatorio."
    }),

  descripcion: Joi
    .string()
    .trim()
    .min(5)
    .messages({
      "string.base": "El campo 'descripcion' debe ser un texto.",
      "string.empty": "El campo 'descripcion' no puede estar vacío.",
      "string.min": "En el campo 'descripcion' al menos 5 caracteres",
      "string.max": "El campo 'descripcion' debe tener como máximo 20 caracteres.",
      "any.required": "El campo 'descripcion' es obligatorio."
    }),

  precio: Joi.number()
    .positive()
    .precision(2)
    .messages({
      "number.base": "El campo 'precio' debe ser un número.",
      "number.positive": "El campo 'precio' debe ser un número positivo.",
      "number.precision": "El campo 'precio' debe tener como máximo 2 decimales.",
      "any.required": "El campo 'precio' es obligatorio."
    }),

  idProveedor: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .messages({
      "number.base": "El campo 'id_proveedor' debe ser un número.",
      "number.integer": "El campo 'id_proveedor' debe ser un número entero.",
      "number.positive": "El campo 'id_proveedor' debe ser un número positivo.",
      "any.required": "El campo 'id_proveedor' no puede estar vacío."
    })

});