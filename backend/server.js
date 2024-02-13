import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./src/config/dbConnection.js";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import Message from "./src/models/message.js";

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const io = new Server({ port: process.env.SOCKET_PORT });

app.use(bodyParser.json());

const bootStrap = async () => {
  try {
    connectDb();
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  } catch (e) {
    throw e;
  }
};

bootStrap().catch((err) => console.log(`Error in configuration! ${err}`));

async function getAllMessages() {
  return await Message.find().sort({ _id: -1 });
}

io.on("connection", (socket) => {
  getAllMessages()
    .then((results) => {
      socket.emit("AllMessages", results.reverse());
    })
    .catch((error) => {
      socket.emit("AllMessages", []);
    });

  socket.on("IncomingChatMessage", (data) => {
    try {
      const message = new Message({
        user_name: data.user_name,
        user_avatar: data.user_avatar,
        message_text: data.message,
      });
      message
        .save()
        .then(() => {
          io.emit("IncomingChatMessage", {
            user_name: data.user_name,
            user_avatar: data.user_avatar,
            message_text: data.message,
          });
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  });
  socket.on("disconnect-", () => {
    console.log("connection disconnected");
  });
});
