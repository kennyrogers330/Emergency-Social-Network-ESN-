import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./src/config/dbConnection.js";
import { Server } from "socket.io";
import http from "http";
import { SocketUtil } from "./src/utils/socketUtils.js";
import {
  connect,
  disconnect,
  dropCollections,
} from "./src/config/inMemoryDB.js";

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const httpServer = http.createServer(app);
SocketUtil.config(httpServer);
export const io = new Server(httpServer, {
  cors: {
    origin: "https://s24fseesnrw1.onrender.com",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// connectDb();

process.env.NODE_ENV === "speed-test" ? connect() : connectDb();

httpServer.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
