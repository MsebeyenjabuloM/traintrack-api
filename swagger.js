const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personal Training API',
      version: '1.0.0',
      description: 'API for managing clients and workout programs',
    },
    servers: [
      {
        url: 'https://crud-api-project2.onrender.com/api',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);



fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));
console.log('✅ Swagger spec written to swagger.json');


module.exports = {
  swaggerUi,
  swaggerSpec,
};

