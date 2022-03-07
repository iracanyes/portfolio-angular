"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = (() => {
    const connect = () => {
        mongoose_1.default
            .connect(process.env.MONGODB_DB_AUTH_URL)
            .then(() => {
            return console.log(`Successfully connect to ${process.env.MONGODB_DB_URL}`);
        })
            .catch(e => {
            console.error(`Error connect to ${process.env.MONGODB_DB_URL}!\n`, e);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
});
