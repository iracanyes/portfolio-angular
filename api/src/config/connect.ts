import { Application } from "express";
import mongoose from "mongoose";


export default (() => {
  const connect = ():void => {
    mongoose
      .connect(process.env.MONGODB_DB_AUTH_URL as string)
      .then( ()=> {
        return console.log(`Successfully connect to ${ process.env.MONGODB_DB_URL as string}`);
      })
      .catch( e => {
        console.error(`Error connect to ${ process.env.MONGODB_DB_URL as string}!\n`, e);
        return process.exit(1);
      })
  };

  connect();

  mongoose.connection.on("disconnected", connect);
});

