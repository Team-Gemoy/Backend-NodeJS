import SwaggerJSDOC from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "We Fly Backend Node JS",
    version: "1.0.0",
    description: "We Fly Team 8 Synergy BCA Batch 6",
    contact: {
      name: "Venansius Mario"
    }
  },
  components: {
    schemas: {
      Notification: {
        type: "object",
        properties: {
          title: {
            type: "string"
          },
          body: {
            type: "string"
          },
          image: {
            type: "string"
          }
        }
      }
    }
  },
  servers: [
    {
      url: "https://backend-nodejs.fly.dev/",
      description: "Development server"
    }
  ]
};

const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: ["./src/routes/*.ts"]
};

export const swaggerSpec = SwaggerJSDOC(options);
