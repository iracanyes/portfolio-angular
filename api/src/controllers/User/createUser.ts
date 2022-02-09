import User from "../../models/User.model";
import {ICreateUserInput, IUser} from "../../types/models";

const createUser = ({email, name}: ICreateUserInput) => {
  return User.create({
    email,
    name
  })
    .then((data: IUser) => {
      return data;
    })
    .catch((e: Error) => {
      throw e;
    });
}

export default createUser;