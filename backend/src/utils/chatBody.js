import moment from "moment";

export const MessageBody = (username, text) => {
  return {
    username,
    text,
    time: moment().format("DD.MM.YYYY h:mm a"),
  };
};
