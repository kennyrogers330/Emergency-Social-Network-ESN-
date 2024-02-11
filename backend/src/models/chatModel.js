import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    message: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    timestamp: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    statusMessage: {
        type: mongoose.SchemaTypes.String,
        required: true
    }

})

const Chat = mongoose.model("Chat", ChatSchema)

export default Chat