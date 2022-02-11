import cors from 'cors';
import {Application} from "express";

export default (app: Application): void => {
  // Configure CORS
  app.use(cors({
    origin: new RegExp(String(process.env.CORS_ALLOW_ORIGIN), "i"),
    methods: process.env.CORS_METHODS,
    allowedHeaders: ['Access-Control-Allow-Origin','Content-Type','Authorization'],
    optionsSuccessStatus: 200
  }));
};