import express from "express";
import AuthController from "../controllers/JoinCommunityController.js";

const router = express.Router();

router.get("/", AuthController.getHome);
router.get("/logout", AuthController.logout);
router
  .get("/citizens", AuthController.getAllDirectory)
  .post("/citizens", AuthController.Signup);

export default router;
