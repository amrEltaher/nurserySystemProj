const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'Documentation for your API endpoints',
    },
    servers: [
      {
        url: 'http://localhost:8080', 
        description: 'Development server',
      },
    ],
  },
  apis: ['./Route/teacherRoute.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
