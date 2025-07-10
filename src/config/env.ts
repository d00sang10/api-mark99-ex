import dotenv from 'dotenv';
import joi from 'joi';

dotenv.config();

const env = joi.object({
    DATABASE_URL: joi.string().uri().required(),
    PORT: joi.number().default(3000),
    API_PREFIX: joi.string().default('/api/v1'),
}).unknown(true);

const { error, value: envVars } = env.validate(process.env);

if (error) {
    throw new Error(`Error en las variables de entorno: ${error.message}`);
}

export default envVars;