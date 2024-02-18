import ChatMessage from'../models/message.js'; // Import the Mongoose Chat model

export class ChatService {
  static async saveChat(newChat) {
    const chat = await ChatMessage.create(newChat);
    return chat;
  }

  static async getOneChat(id) {
    const newChat = await ChatMessage.findById(id)
      .populate({
        path: 'citizen',
        select: '-password -authCode -mustUpdatePassword -lastTimePasswordUpdated'
      })
      .exec();
    return newChat;
  }

  static async getChats() {
    const totalChats = await ChatMessage.countDocuments();
    const chats = await ChatMessage.find()
      .sort({ createdAt: -1 })
      .populate({
        path: 'senderId',
        select: '-password -authCode -mustUpdatePassword -lastTimePasswordUpdated'
      })
      .exec();
    return { totalChats, chats };
  }
}
