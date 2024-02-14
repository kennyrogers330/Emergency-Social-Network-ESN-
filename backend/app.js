import express from "express";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swagger.js";
import citizeRouter from "./src/middlewares/citizenRoutes.js";
import ChatInterface from "./src/middlewares/ChatInterface.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// MOUTING ROUTES

app.use("/api/v1/citizens", citizeRouter);

app.use("/api/v1/messages", ChatInterface);

export default app;
