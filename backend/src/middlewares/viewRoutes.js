import express from "express";
import { getHome, getAllDirectory } from "./../controllers/viewController.js";
const router = express.Router();

router.get("/", getHome);

router.get("/citizens", getAllDirectory);
export default router;
