import mongoose, { Schema, Document } from "mongoose";
import {IUser} from "../types/models";



const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model<IUser>("User", UserSchema);