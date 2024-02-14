import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./src/config/dbConnection.js";
import httpServer from "./app.js";

dotenv.config({ path: "./config.env" });

connectDb();
const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log(`App running on port ${port}...`);
});