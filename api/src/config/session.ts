import session  from "express-session";
import {Application, Request, Response} from "express";

import ConnectMongoDBSession from 'connect-mongodb-session';

const MongoDBStore = ConnectMongoDBSession(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_SESSION_AUTH_URL as string,
  databaseName: 'portfolio',
  collection: 'mySessions'
});

const sessionOpt = {
  name: 'myCookieSessionId',
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: true,
  store,
  cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    domain: process.env.NODE_ENV === "development"
      ? 'localhost'
      : 'portfolio.iracanyes.com'
  }
};


const MySession = ( app : Application) => {
  // For secure cookies
  app.set('trust proxy', 1);

  // @ts-ignore
  app.use(session(sessionOpt));
};

export default MySession;