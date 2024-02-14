import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  time: {
    type: String,
  },
});

export default mongoose.model("Message", mSchema);
