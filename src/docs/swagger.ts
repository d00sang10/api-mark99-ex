import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Mark99',
        version: '1.0.0',
        description: 'API documentation for Mark99Re',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [{ bearerAuth: [] }],

};

const options = {
    swaggerDefinition,
    apis: ['./dist/routes/*.js', './dist/controllers/*.js'],
};

export const swaggerSpec = swaggerJsdoc(options);