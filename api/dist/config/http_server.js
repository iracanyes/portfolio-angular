"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
exports.default = (app) => {
    try {
        if (!process.env.CERTS_PRIVATE_KEY && !process.env.CERTS_PUBLIC_KEY)
            return;
        // Private Key
        const privateKey = fs_1.default.readFileSync(path_1.default.resolve(process.env["CERTS_PRIVATE_KEY"]), 'utf8');
        const pubCertificate = fs_1.default.readFileSync(path_1.default.resolve(process.env.CERTS_PUBLIC_KEY), 'utf8');
        const credentials = { key: privateKey, cert: pubCertificate };
        // Create HTTP/HTTPS server
        const httpServer = http_1.default.createServer(app);
        const httpsServer = https_1.default.createServer(credentials, app);
        // Configure port for each server
        httpServer.listen(process.env.EXPRESS_HTTP_SERVER_PORT, () => {
            // tslint: disable-next-line:no-console
            console.log(`Server started at http://localhost:${process.env.EXPRESS_HTTP_SERVER_PORT}`);
        });
        httpsServer.listen(process.env.EXPRESS_HTTPS_SERVER_PORT, () => {
            // tslint: disable-next-line:no-console
            console.log(`Server started at https://localhost:${process.env.EXPRESS_HTTPS_SERVER_PORT}`);
        });
    }
    catch (e) {
        console.error(e);
    }
};
