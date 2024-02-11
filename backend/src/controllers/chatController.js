
import Chat from "../models/chatModel.js";

export const getChats = () => {
    Chat.find()
        .then(messages => {
            res.status(200).json({users})
        })
        .catch (error => {
            console.log(error);
            res.status(500).send("Internal Server Error");
          })

}

