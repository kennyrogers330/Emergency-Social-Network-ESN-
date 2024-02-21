import { SocketUtil } from "../utils/socketUtils.js";
import { ChatService } from "../services/chatServices.js"; // Import the ChatService

export class ChatController {
  static async saveMessage(req, res) {
    try {
      const newMessage = {
        senderId: req.user.id,
        message: req.body.message,
      };

      SocketUtil.socketEmit("receive_message", newMessage);

      const savedMessage = await ChatService.saveChat(newMessage);

      return res
        .status(200)
        .json({ message: "Message sent.", newMessage: savedMessage });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
        message: "Failed to send a new message",
      });
    }
  }

  static async setPrivateMessage(req, res) {
    try {
      const chat = {
        sender_id: req.user.id,
        receiver_id: req.body.receiver_id,
        message: req.body.message,
      };
      SocketUtil.socketEmit("receive_message", chat);
      const newChat = await ChatService.savePrivateChat(chat);

      return res
        .status(200)
        .json({ message: "Private message sent.", newChat: newChat });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
        message: "Failed to send a private message",
      });
    }
  }

  static async getPrivateChats(req, res) {
    try {
      const otherUserId = req.params.id;
      const chats = await ChatService.getPrivateChatsBetweenUsers(
        req.user.id,
        otherUserId,
      );

      return res
        .status(200)
        .json({ message: "Fetched private chats", count: chats.length, chats });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
        message: "Failed to fetch private chats",
      });
    }
  }

  static async getAllChatsForUser(req, res) {
    try {
      const chats = await ChatService.getAllChatsOfUser(req.user.id);

      return res
        .status(200)
        .json({ status: "success", count: chats.length, chats });
    } catch (err) {
      return res
        .status(500)
        .json({
          status: "error",
          error: err.message,
          message: "Failed to fetch chats",
        });
    }
  }

  // static async getConversationWithUser(req, res) {
  //   try {
  //     const otherUserId = req.params.id;
  //     const chats = await ChatService.getPrivateChatsBetweenUsers(
  //       req.user.id,
  //       otherUserId,
  //     );

  //     return res
  //       .status(200)
  //       .json({ message: "Fetched conversation", count: chats.length, chats });
  //   } catch (err) {
  //     return res.status(500).json({
  //       error: err.message,
  //       message: "Failed to fetch conversation",
  //     });
  //   }
  // }

  static async getMessages(req, res) {
    try {
      //   const { offset } = req.query;
      const limit = req.query.limit || 30;

      const messages = await ChatService.getChats();

      return res
        .status(200)
        .json({ message: "Fetched old messages", messages });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
        message: "Failed to fetch old messages",
      });
    }
  }
}
