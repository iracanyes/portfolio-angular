import { Application } from "express";
import mongoose from "mongoose";


export default (() => {
  const connect = ():void => {
    mongoose
      .connect(process.env.MONGODB_DB_AUTH_URL as string)
      .then( ()=> {
        console.log(`Successfully connect to database`);
      })
      .catch( e => {
        console.error(`Error connect to database\n`, e);
        return process.exit(1);
      })
  };

  connect();

  mongoose.connection.on("disconnected", connect);
});

