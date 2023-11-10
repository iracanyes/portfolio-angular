import http from "http";
import path from "path";
import https from "https";
import fs from "fs";
import {Application} from "express";

export default ( app: Application ): void => {
  try{
    if(!process.env.CERTS_PRIVATE_KEY && !process.env.CERTS_PUBLIC_KEY) return;
    // Private Key
    const privateKey = fs.readFileSync(path.resolve(<string>process.env["CERTS_PRIVATE_KEY"]), 'utf8');
    const pubCertificate = fs.readFileSync(path.resolve(<string>process.env.CERTS_PUBLIC_KEY), 'utf8');

    const credentials = { key: privateKey, cert: pubCertificate};

    // Create HTTP/HTTPS server
    const httpServer = http.createServer(app);
    const httpsServer = https.createServer(credentials, app);

    // Configure port for each server
    httpServer.listen(process.env.EXPRESS_HTTP_SERVER_PORT,() => {
      // tslint: disable-next-line:no-console
      //console.log(`Server started at http://localhost:${process.env.EXPRESS_HTTP_SERVER_PORT}`);
    });
    httpsServer.listen(process.env.EXPRESS_HTTPS_SERVER_PORT,() => {
      // tslint: disable-next-line:no-console
      //console.log(`Server started at https://localhost:${process.env.EXPRESS_HTTPS_SERVER_PORT}`);
    });
  }catch (e) {
    console.error(e);
  }

};