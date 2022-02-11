"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
exports.default = (app) => {
    // Configure CORS
    app.use((0, cors_1.default)({
        origin: new RegExp(String(process.env.CORS_ALLOW_ORIGIN), "i"),
        methods: process.env.CORS_METHODS,
        allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type', 'Authorization'],
        optionsSuccessStatus: 200
    }));
};
