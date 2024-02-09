exports.swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API for Emergency Social Network (ESN) Application",
      version: "1.0.0",
      description:
        "ESN is a social network that citizens can use during emergency situations.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
  explorer: true,
};
