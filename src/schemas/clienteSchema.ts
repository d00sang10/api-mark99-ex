// import Joi from "joi"


// export const clienteCrearSchema = Joi.object({
  
//   nombre: Joi.string().max(100).required().messages({
//     "string.base": "El campo 'nombre' debe ser un texto.",
//     "string.empty": "El campo 'nombre' no puede estar vacío.",
//     "string.max": "El campo 'nombre' debe tener como máximo 100 caracteres.",
//     "any.required": "El campo 'nombre' es obligatorio."
//   }),

//   email: Joi.string().email().required().messages({
//     "string.base": "El campo 'email' debe ser un texto.",
//     "string.empty": "El campo 'email' no puede estar vacío.",
//     "string.email": "El campo 'email' debe tener un formato válido.",
//     "any.required": "El campo 'email' es obligatorio."
//   })


// });

import Joi from "joi"

export const clienteCrearSchema = Joi.object({

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
            // "string.min": "El campo 'nombre' no puede estar vacío o solo contener espacios.",
            "string.max": "El campo 'nombre' debe tener como máximo 20 caracteres.",
            "any.required": "El campo 'nombre' es obligatorio."
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
        })
});

