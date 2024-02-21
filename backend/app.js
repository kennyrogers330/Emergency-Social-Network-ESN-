import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import userRoutes from "./src/routes/userRoutes.js";
import chatRoutes from "./src/routes/chatRoutes.js";
import privateRoute from "./src/routes/privateRouteChat.js";
import { swaggerOptions } from "./swagger.js";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./config.env" });

const { SESSION_SECRET } = process.env;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api/v1/api-documentation", swaggerUi.serve, swaggerUi.setup(specs));

// MOUNTING ROUTES
app.use("/api/v1", userRoutes);
app.use("/api/v1/messages", chatRoutes);
app.use("/api/v1/message", privateRoute);

export default app;
