"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMail = (req, res) => {
    const data = req.body;
    console.log("sendMail controller data", data);
    const response = { message: "Send mail ready!", data };
    return res.send({ response });
};
exports.default = sendMail;
