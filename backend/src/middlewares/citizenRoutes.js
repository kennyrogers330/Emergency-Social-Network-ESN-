import express from "express";
import AuthController from "../controllers/authController.js";
import { getHome, getAllDirectory } from "./../controllers/viewController.js";
const router = express.Router();

// router.post("/signup", AuthController.Signup);
// router.post("/login", (req, res, next) => {
//   console.log("we here now! login");
//   next();
// });

router.get("/", getHome);

router
  .get("/citizens", getAllDirectory)
  .post("/citizens", AuthController.Signup);

export default router;
