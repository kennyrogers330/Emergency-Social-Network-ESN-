import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swagger.js";
import citizeRouter from "./src/middlewares/citizenRoutes.js";

const app = express();

import { createServer } from "http";

const httpServer = createServer(app);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// MOUTING ROUTES

app.use("/api/v1", citizeRouter);

export default httpServer;
