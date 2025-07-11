import Joi from "joi"

export const proveedorCrearSchema = Joi.object({

    nombre: Joi
        .string()
        .trim()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.base": "El campo 'nombre' debe ser un texto.",
            "string.empty": "El campo 'nombre' no puede estar vacío.",
            "string.min": "En el campo 'nombre' al menos 3 caracteres",
            "string.max": "El campo 'nombre' debe tener como máximo 20 caracteres.",
            "any.required": "El campo 'nombre' es obligatorio."
        }),


    contacto: Joi
        .string()
        .trim()
        .min(5)
        .max(20)
        .messages({
            "string.base": "El campo 'contacto' debe ser un texto.",
            "string.empty": "El campo 'contacto' no puede estar vacío.",
            "string.min": "En el campo 'contacto' al menos 5 caracteres",
            "string.max": "El campo 'contacto' debe tener como máximo 20 caracteres.",
            "any.required": "El campo 'contacto' es obligatorio."
        }),

    telefono: Joi
        .string()
        .trim()
        .min(9)
        .required()
        .pattern(/^\d{7,15}$/)
        .messages({
            "string.base": "El campo 'teléfono' debe ser un texto.",
            "string.empty": "El campo 'teléfono' no puede estar vacío.",
            "string.min": "Al menos 9 numeros",
            "string.pattern.base": "El campo 'teléfono' debe contener solo números (entre 7 y 15 dígitos)."
        }),

    email: Joi
        .string()
        .trim()
        .email()
        .min(1)
        .required()
        .messages({
            "string.base": "El campo 'email' debe ser un texto.",
            "string.email": "El campo 'email' debe tener un formato válido.",
            "string.min": "El campo 'email' no puede estar vacío o solo contener espacios."
        }),

})

export const proveedorActualizarSchema = Joi.object({

    nombre: Joi
        .string()
        .trim()
        .min(3)
        .max(20)
        .messages({
            "string.base": "El campo 'nombre' debe ser un texto.",
            "string.empty": "El campo 'nombre' no puede estar vacío.",
            "string.min": "En el campo 'nombre' al menos 3 caracteres",
            "string.max": "El campo 'nombre' debe tener como máximo 20 caracteres.",
            "any.required": "El campo 'nombre' es obligatorio."
        }),


    contacto: Joi
        .string()
        .trim()
        .min(5)
        .max(20)
        .messages({
            "string.base": "El campo 'contacto' debe ser un texto.",
            "string.empty": "El campo 'contacto' no puede estar vacío.",
            "string.min": "En el campo 'contacto' al menos 5 caracteres",
            "string.max": "El campo 'contacto' debe tener como máximo 20 caracteres.",
            "any.required": "El campo 'contacto' es obligatorio."
        }),

    telefono: Joi
        .string()
        .trim()
        .min(9)
        .pattern(/^\d{7,15}$/)
        .messages({
            "string.base": "El campo 'teléfono' debe ser un texto.",
            "string.empty": "El campo 'teléfono' no puede estar vacío.",
            "string.min": "Al menos 9 numeros",
            "string.pattern.base": "El campo 'teléfono' debe contener solo números (entre 7 y 15 dígitos)."
        }),

    email: Joi
        .string()
        .trim()
        .email()
        .min(1)
        .messages({
            "string.base": "El campo 'email' debe ser un texto.",
            "string.email": "El campo 'email' debe tener un formato válido.",
            "string.min": "El campo 'email' no puede estar vacío o solo contener espacios."
        }),

})