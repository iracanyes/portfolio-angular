"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailerReady = exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("../../config/nodemailer"));
const mailerReady = (req, res, next) => {
    if (req.method !== "GET") {
        next();
    }
    const response = {
        message: "Hello, ready to hear from you!",
    };
    return res.send(Object.assign({}, response));
};
exports.mailerReady = mailerReady;
const sendMail = (req, res) => {
    const data = req.body;
    // console.log("sendMail POST request body", req.body);
    // console.log("sendMail POST data", data);
    // console.log("sendMail POST cookies", req.cookies);
    // Send mail
    const mailer = new nodemailer_1.default();
    const response = mailer.sendMail(data);
    // Save message
    return res.send({ response });
};
exports.sendMail = sendMail;
