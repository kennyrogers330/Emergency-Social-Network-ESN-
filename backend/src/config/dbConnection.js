import mongoose from "mongoose";

const connectDb = async () => {
  let connect;
  try {
    connect = await mongoose.connect(
      process.env.CONNECTION_STRING.replace("true ", "true"),
      {},
    );
    console.log(
      "Database connected",
      connect.connection.host,
      connect.connection.name,
    );
  } catch (err) {
    console.log("error", err);
    process.exit(1);
  }
  return connect;
};

export default connectDb;
