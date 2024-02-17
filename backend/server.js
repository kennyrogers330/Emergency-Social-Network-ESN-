import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./src/config/dbConnection.js";
import { Server } from "socket.io";
import http from "http";
import Message from "./src/models/message.js";
import { JoinCommunity, getThisUser, onExit } from "./src/utils/directory.js";
import { MessageBody } from "./src/utils/chatBody.js";

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const DB = connectDb();

io.on("connection", (socket) => {
  console.log("Client connected & socket ID is", socket.id);
  const room = "public_room";

  //Joining the chat community
  socket.on("joinRoom", (username) => {
    const citizen = JoinCommunity(socket.id, username, room);
    socket.join(citizen.room);
    DB.then(async () => {
      const messages = await Message.find();
      socket.emit("AllMessages", messages);
    });
  });

  // Upon message sent
  socket.on("newMessage", (msg) => {
    const citizen = getThisUser(socket.id);
    const message = MessageBody(citizen.username2, msg);
    DB.then(async () => {
      await Message.create(message);
    });
    io.to(citizen.room).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

httpServer.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
