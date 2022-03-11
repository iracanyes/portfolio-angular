import mongoose, {Schema} from "mongoose";
import {IMessage} from "../types/interface";



const MessageSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

export default mongoose.model<IMessage>("Message",MessageSchema);