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
    const data = req.body;
    console.log("sendMail controller data", data);
    const response = {
        message: "GET - Send mail ready!",
    };
    return res.send(Object.assign(Object.assign({}, response), { csrfToken: req.csrfToken() }));
};
exports.mailerReady = mailerReady;
const sendMail = (req, res) => {
    const data = req.body;
    console.log("sendMail controller request body", req.body);
    console.log("sendMail controller data", data);
    const mailer = new nodemailer_1.default();
    const response = mailer.sendMail(data);
    return res.send({ response });
};
exports.sendMail = sendMail;
