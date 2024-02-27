import express from "express";
import AuthController from "../controllers/JoinCommunityController.js";
import isLogin from "../middlewares/auth.js";
import shareStatusController from "../controllers/shareStatusController.js";

const router = express.Router();

router.route("/homepage").get(AuthController.getHome);
router.route("/logout").get(AuthController.logout);

router
  .route("/citizens")
  .get(AuthController.protect, AuthController.getAllDirectory)
  .post(AuthController.Signup);
router
  .route("/citizens/:id/status")
  .put(AuthController.protect, shareStatusController);
  
export default router;
