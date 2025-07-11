import Joi from 'joi';

export const registerSchema = Joi.object({
    username: Joi.string().trim().min(3).required().messages({
        'string.base': 'El usuario debe ser texto',
        'string.min': 'El usuario debe tener al menos 3 caracteres',
        'any.required': 'El usuario es obligatorio'
    }),
    password: Joi.string().trim().min(6).required().messages({
        'string.min': 'La contraseña debe tener al menos 6 caracteres',
        'any.required': 'La contraseña es obligatoria'
    }),
});

export const loginSchema = Joi.object({
    username: Joi.string().trim().min(3).required().messages({
        'string.base': 'El usuario debe ser texto',
        'string.min': 'El usuario debe tener al menos 3 caracteres',
        'any.required': 'El usuario es obligatorio'
    }),
    password: Joi.string().trim().min(6).required().messages({
        'string.min': 'La contraseña debe tener al menos 6 caracteres',
        'any.required': 'La contraseña es obligatoria'
    }),
});
