"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const connect_1 = __importDefault(require("./config/connect"));
const http_server_1 = __importDefault(require("./config/http_server"));
const cors_1 = __importDefault(require("./config/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Environment variable file path
dotenv_1.default.config({ path: ".env.local" });
// Get port
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Connect MongoDB
(0, connect_1.default)();
// Configure Http/Https server
(0, http_server_1.default)(app);
/*
* Security
* */
// Configure helmet
app.use((0, helmet_1.default)());
// Configure CORS
(0, cors_1.default)(app);
// Cookie parser
app.use((0, cookie_parser_1.default)());
// Serve static files located in directory public
app.use(express_1.default.static(path_1.default.resolve('public')));
// Parsers for POST data
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Set api routes
app.use("/", routes_1.default);
// Change error 404 message modifing the middleware
app.use((req, res) => {
    res.status(404).send('Sorry, no route corresponding to request');
});
