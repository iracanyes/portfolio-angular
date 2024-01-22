"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const apiLimiter = (0, express_rate_limit_1.default)({
    // 15min in ms
    windowMs: 15 * 60 * 1000,
    // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    max: 100,
    // Return rate limit info in the `RateLimit-*` headers
    standardHeaders: true,
    // Disable the `X-RateLimit-*` headers
    legacyHeaders: false,
});
const RateLimiter = (app) => {
    // Apply the rate limiting middleware to API calls only
    app.use('/', apiLimiter);
};
exports.RateLimiter = RateLimiter;
