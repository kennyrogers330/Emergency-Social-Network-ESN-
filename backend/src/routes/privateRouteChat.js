import express from "express";
import AuthController from "../controllers/JoinCommunityController.js";
import { ChatController } from "../controllers/chatController.js";

const router = express.Router();

router
  .route("/")
  .get(AuthController.protect, ChatController.getPrivateChats)
  .post(AuthController.protect, ChatController.setPrivateMessage);

export default router;
