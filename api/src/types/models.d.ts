import {Document} from "mongoose";

export interface IUser extends Document {
  email: string;
  name: string;

}

export interface ICreateUserInput {
  email: IUser["email"];
  name: IUser['name'];
}

