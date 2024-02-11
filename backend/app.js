import express from "express";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger.js";

import path from "path";
// import { rootDirectory } from "./src/utils/utils.js";
import session from "express-session";
import connectMongoDBSession from "connect-mongodb-session";
import router from "./src/routes/user.js";

// const passport = require(path.join(rootDirectory, "src", "middlewares", "passport-config")); 

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}))
// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(router)

// module.exports = app;

export default app;
