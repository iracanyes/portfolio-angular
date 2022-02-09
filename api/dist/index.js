"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const connect_1 = __importDefault(require("./connect"));
const http_server_1 = __importDefault(require("./http_server"));
require("dotenv/config");
// Get port
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Connect MongoDB
(0, connect_1.default)();
// Configure Http/Https server
(0, http_server_1.default)(app);
// Serve static files located in directory public
app.use(express_1.default.static('public'));
// Parsers for POST data
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Set api routes
app.use("/", routes_1.default);
// Change error 404 message modifing the middleware
app.use((req, res) => {
    res.status(404).send('Sorry, no route corresponding to request');
});
/* Start Express server
app.listen(port, () => {
    // tslint: disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
})

 */ 
