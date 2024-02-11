import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

import app from "./app.js";
import connectDb from "./src/config/dbConnection.js";

connectDb();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
