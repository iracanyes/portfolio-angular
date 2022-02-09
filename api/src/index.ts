import express, { Application, Request, Response, NextFunction}  from "express";
import path  from "path";
import https from "https";
import http from "http";
import fs from "fs";
import bodyParser from "body-parser";
import router from "./routes";
import Connect from "./connect";
import HttpServer from "./http_server";
import 'dotenv/config';

// Get port
const port = process.env.PORT || 3000;

const app: Application = express();

// Connect MongoDB
Connect();

// Configure Http/Https server
HttpServer(app);
// Serve static files located in directory public
app.use(express.static('public'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set api routes
app.use("/", router);

// Change error 404 message modifing the middleware
app.use((req: Request, res:Response ) =>{
    res.status(404).send('Sorry, no route corresponding to request');
})

/* Start Express server
app.listen(port, () => {
    // tslint: disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
})

 */