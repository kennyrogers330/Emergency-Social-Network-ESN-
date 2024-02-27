import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./src/config/dbConnection.js";
import { Server } from "socket.io";
import http from "http";
import { SocketUtil } from "./src/utils/socketUtils.js";
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const httpServer = http.createServer(app);
SocketUtil.config(httpServer);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true,
  },
});

connectDb();

httpServer.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
