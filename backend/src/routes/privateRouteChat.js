import express from "express";
import AuthController from "../controllers/JoinCommunityController.js";
import { ChatController } from "../controllers/chatController.js";

const router = express.Router();

router
  .route("/")
  .post(AuthController.protect, ChatController.setPrivateMessage);

router
  .route("/:id")
  .get(AuthController.protect, ChatController.getPrivateChats);

router
  .route("/conversation/:id")
  .get(AuthController.protect, ChatController.getConversationWithUser);

export default router;
