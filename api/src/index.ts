import express, { Application, Request, Response, NextFunction}  from "express";
import path  from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import router from "./routes";
import Connect from "./config/connect";
import HttpServer from "./config/http_server";
import Cors from "./config/cors";
import dotenv from "dotenv";

// Environment variable file path
dotenv.config({ path: ".env.local"});

// Get port
const port = process.env.PORT || 3000;

const app: Application = express();

// Connect MongoDB
Connect();

// Configure Http/Https server
HttpServer(app);

/*
* Security
* */

// Configure helmet
app.use(helmet());

// Configure CORS
Cors(app);

// Cookie parser
app.use(cookieParser());



// Serve static files located in directory public
app.use(express.static(path.resolve('public')));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set api routes
app.use("/", router);

// Change error 404 message modifing the middleware
app.use((req: Request, res:Response ) =>{
    res.status(404).send('Sorry, no route corresponding to request');
});

