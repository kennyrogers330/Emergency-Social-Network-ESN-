import express from "express";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swagger.js";
import citizeRouter from "./src/middlewares/citizenRoutes.js";
import viewRoutes from "./src/middlewares/viewRoutes.js";

const app = express();

app.use(express.json());

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// MOUTING ROUTES

app.use("/api/v1", citizeRouter);
// app.use("/", viewRoutes);
export default app;
