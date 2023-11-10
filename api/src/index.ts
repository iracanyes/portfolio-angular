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
import MySession from "./config/session";
import {Csurf} from "./config/csurf";
import {RateLimiter} from "./config/rate_limiter";
import compression from "compression";

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
/*
 * app.set('trust proxy', numberOfProxies)
 * Where numberOfProxies is the number of proxies between the user and the server.
 */
app.set('trust proxy', 1);

// Configure helmet security
app.use(helmet());

// Configure CORS
Cors(app);

// Cookie parser
app.use(cookieParser(process.env.SESSION_SECRET));

// Session
MySession(app);
// Rate limiter
RateLimiter(app);

// Compression Gzip/deflate
app.use(compression());

// Serve static files located in directory public
app.use(express.static(path.resolve('public')));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CSRF Token
Csurf(app, router);
// Set api routes
app.use("/", router);


// Change error 404 message modifing the middleware
app.use((req: Request, res:Response ) =>{
    res.status(404).send('Sorry, no route corresponding to request');
});

