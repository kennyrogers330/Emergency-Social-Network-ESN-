import express from "express";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger.js";
import Chat from "./src/models/chatModel.js";

import path from "path";
// import { rootDirectory } from "./src/utils/utils.js";
import session from "express-session";
import connectMongoDBSession from "connect-mongodb-session";
import router from "./src/routes/routes.js";

const app = express();

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json());

app.use(express.urlencoded({extended: true}))



// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(router)

io.on("connection", (socket) => {
    const serverSocketId = socket.id

    // Handle "chat message" event
    socket.on("chat message", ( message, timestamp, username, statusMessage) => {        
        username = loggedInUser      
        io.emit("chat message", {message, timestamp, username, statusMessage, serverSocketId})
        Chat.create({ username, message, timestamp, statusMessage})
    })
})

export default httpServer;


// https://socket.io/docs/v3/server-initialization/#ES-modules