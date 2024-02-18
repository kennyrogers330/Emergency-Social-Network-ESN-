import { SocketUtil } from '../utils/socketUtils.js';
import { ChatService } from '../services/chatServices.js'; // Import the ChatService

export class ChatController {
  static async saveMessage(req, res) {
    try {
      const newMessage = {
        senderId: req.user.id,
        message: req.body.message,
      };
      
      SocketUtil.socketEmit('receive_message', newMessage);

      const savedMessage = await ChatService.saveChat(newMessage);

      return res.status(200).json({ message: 'Message sent.', newMessage: savedMessage });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
        message: 'Failed to send a new message',
      });
    }
  }

  static async getMessages(req, res) {
    try {
    //   const { offset } = req.query;
      const limit = req.query.limit || 30;
      
      const messages = await ChatService.getChats();

      return res.status(200).json({ message: 'Fetched old messages', messages });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
        message: 'Failed to fetch old messages',
      });
    }
  }
}
