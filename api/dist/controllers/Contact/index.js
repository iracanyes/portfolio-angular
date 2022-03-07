"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendMail_1 = require("./sendMail");
const createMessage_1 = __importDefault(require("./createMessage"));
exports.default = { createMessage: createMessage_1.default, sendMail: sendMail_1.sendMail, mailerReady: sendMail_1.mailerReady };
