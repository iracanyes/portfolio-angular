import helmet from "helmet";
import {Application} from "express";

export default (app: Application) => {
  app.use(helmet({
    frameguard: true,
  }));
};