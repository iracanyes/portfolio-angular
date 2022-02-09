"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Contact_1 = __importDefault(require("../../controllers/Contact"));
const router = (0, express_1.Router)();
router.get('/send_mail', Contact_1.default.sendMail);
exports.default = router;
