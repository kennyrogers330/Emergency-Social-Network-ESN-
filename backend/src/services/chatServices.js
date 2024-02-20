import ChatMessage from "../models/message.js"; // Import the Mongoose Chat model
import PrivateChat from "../models/privateChatModel.js";

export class ChatService {
  static async saveChat(newChat) {
    const chat = await ChatMessage.create(newChat);
    return chat;
  }

  static async savePrivateChat(newChat) {
    const myChat = await PrivateChat.create(newChat);
    return myChat;
  }

  static async getPrivateChatsBetweenUsers(userId, otherUserId) {
    const chats = await PrivateChat.find({
      $or: [
        { $and: [{ sender_id: userId }, { receiver_id: otherUserId }] },
        { $and: [{ sender_id: otherUserId }, { receiver_id: userId }] },
      ],
    })
      .populate("sender_id", "username")
      .populate("receiver_id", "username")
      .exec();

    return chats;
  }
  static async getOneChat(id) {
    const newChat = await ChatMessage.findById(id)
      .populate({
        path: "citizen",
        select:
          "-password -authCode -mustUpdatePassword -lastTimePasswordUpdated",
      })
      .exec();
    return newChat;
  }

  static async getChats() {
    const totalChats = await ChatMessage.countDocuments();
    const chats = await ChatMessage.find()
      .sort({ createdAt: 1 })
      .populate({
        path: "senderId",
        select:
          "-password -authCode -mustUpdatePassword -lastTimePasswordUpdated",
      })
      .exec();
    return { totalChats, chats };
  }
}
