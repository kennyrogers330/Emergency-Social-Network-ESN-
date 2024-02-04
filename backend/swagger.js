export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Your API Title',
          version: '1.0.0',
          description: 'Your API description',
        },
        servers: [
          {
            url: 'http://localhost:3000',
          },
        ],
      },
      apis: ['./routes/*.js'],
      explorer: true
    };
    
