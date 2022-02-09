"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_1 = __importDefault(require("./contact"));
const router = (0, express_1.Router)();
// Get Homepage
router.get('/', (req, res) => {
    res.send("Hello world!");
});
// Contact routes
router.use("/contact", contact_1.default);
// User routes
//router.use("/user", userRoutes);
exports.default = router;
