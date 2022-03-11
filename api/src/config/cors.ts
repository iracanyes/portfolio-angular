import cors from 'cors';
import {Application} from "express";

export default (app: Application): void => {
  // Configure CORS
  const {
    CORS_ALLOW_ORIGIN,
    CORS_METHODS,
    CORS_ALLOWED_HEADERS,
  } = process.env;
  app.use(cors({
    origin: new RegExp(String(CORS_ALLOW_ORIGIN), "i"),
    methods: CORS_METHODS,
    credentials: true,
    allowedHeaders: CORS_ALLOWED_HEADERS ? CORS_ALLOWED_HEADERS.split(',') : '',
    optionsSuccessStatus: 200
  }));
};