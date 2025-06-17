const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TrainTrack API',
      version: '1.0.0',
      description: 'API for managing clients, programs, sessions, and trainers',
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


try {
  fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));
  console.log('✅ Swagger spec written to swagger.json');
} catch (err) {
  console.error('❌ Failed to write Swagger spec:', err);
}

module.exports = {
  swaggerUi,
  swaggerSpec,
};

