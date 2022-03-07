import Message from "../../models/Message.model";
import {IMessage} from "../../types/interface";

const createMessage = async ({email, subject, content}: IMessage): Promise<void|IMessage> => {
  return Message.create({email, subject, content})
    .then((data: IMessage) => {
      console.log("Message saved!");
      return data;
    })
    .catch((e: Error) => {
      console.error("Create Message Error\n", e);
    })
};


export default createMessage;