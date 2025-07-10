import swaggerJSDoc from "swagger-jsdoc";

export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mark99',
            version: '1.0.0',
            description: "API de Gestion",
            contact: {
                name: 'Grupo 4',
            },
        },
        servers: [{ url: 'http://localhost:3000' }],
    },
    apis: ["./dist/routes/*.js"],
};

const spec = swaggerJSDoc(options);

export default spec;