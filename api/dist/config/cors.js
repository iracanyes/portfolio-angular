"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
exports.default = (app) => {
    // Configure CORS
    const { CORS_ALLOW_ORIGIN, CORS_METHODS, CORS_ALLOWED_HEADERS, } = process.env;
    app.use((0, cors_1.default)({
        origin: new RegExp(String(CORS_ALLOW_ORIGIN), "i"),
        methods: CORS_METHODS,
        credentials: true,
        allowedHeaders: CORS_ALLOWED_HEADERS ? CORS_ALLOWED_HEADERS.split(',') : '',
        optionsSuccessStatus: 200
    }));
};
