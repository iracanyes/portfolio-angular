import { Application } from "express";
import mongoose from "mongoose";


const Connect = () => {
  const connect = async () => {
    await mongoose
      .connect(
        // @ts-ignore
        process.env.MONGODB_DB_AUTH_URL,
        {
          useUnifiedTopology: true,
        }
      )
      .then( ()=> {
        return console.log(`Successfully connect to ${ process.env.MONGODB_DB_URL }`);
      })
      .catch( e => {
        console.error(`Error connect to ${ process.env.MONGODB_DB_URL }!\n`, e);
        return process.exit(1);
      })
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};

export default Connect;