import express from "express";
import AuthController from "../controllers/JoinCommunityController.js";

const router = express.Router();

router.route("/homepage").get(AuthController.getHome);
router.route("/logout").get(AuthController.logout);

router
  .route("/citizens")
  .get(AuthController.protect, AuthController.getAllDirectory)
  .post(AuthController.Signup);

export default router;
