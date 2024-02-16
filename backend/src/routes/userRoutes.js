import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../../swagger.js";
import AuthController from "../controllers/JoinCommunityController.js";

const router = express.Router();

router.route("/homepage").get(AuthController.getHome);
router.route("/logout").get(AuthController.logout);

router
  .route("/citizens")
  .get(AuthController.protect, AuthController.getAllDirectory)
  .post(AuthController.Signup);

export default router;
