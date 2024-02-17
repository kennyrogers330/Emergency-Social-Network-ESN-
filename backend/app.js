import express from "express";
import cors from "cors";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import userRoutes from "./src/routes/userRoutes.js";
import { swaggerOptions } from "./swagger.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// MOUNTING ROUTES
app.use("/api/v1", userRoutes);

// app.use("/api/v1/messages", ChatInterface);
export default app;
