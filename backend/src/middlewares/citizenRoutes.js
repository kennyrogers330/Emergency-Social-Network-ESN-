import express from "express";
import AuthController from "../controllers/JoinCommunityController.js";

const router = express.Router();

router.get("/homePage", AuthController.getHome);
router.get("/logout", AuthController.logout);
router
  .route("/")
  .get(AuthController.protect, AuthController.getAllDirectory)
  .post(AuthController.Signup);

export default router;
