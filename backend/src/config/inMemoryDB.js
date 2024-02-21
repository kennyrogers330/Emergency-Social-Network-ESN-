import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

export const connect = async () => {
  console.log(`InMemory MongoDB Successfully connected`);
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { dbName: "testingDb" });
  console.log(`InMemory MongoDB Successfully connected to ${mongoUri}`);
  await mongoose.disconnect();
  mongoose.connection.close();
  return true;
};
