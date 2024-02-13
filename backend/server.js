import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

import httpServer from "./app.js";
import connectDb from "./src/config/dbConnection.js";

connectDb();
const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
