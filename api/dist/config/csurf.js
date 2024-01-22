"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Csurf = exports.csrfProtection = void 0;
const csurf_1 = __importDefault(require("csurf"));
exports.csrfProtection = (0, csurf_1.default)({
    cookie: {
        httpOnly: false,
        signed: false,
        secure: true,
        maxAge: 6 * 60 * 60 * 1000,
        domain: process.env.NODE_ENV === "development"
            ? 'localhost'
            : 'portfolio.iracanyes.com'
    },
    ignoreMethods: ["GET", "HEAD", "OPTIONS"],
    value: (req) => {
        return req.cookies['XSRF-TOKEN'];
    }
});
const Csurf = (app, router) => {
    app.all("*", exports.csrfProtection, (req, res, next) => {
        res.cookie('XSRF-TOKEN', req.csrfToken(), {
            path: '/',
            httpOnly: false,
            secure: true,
            maxAge: 6 * 60 * 60 * 1000,
            domain: process.env.NODE_ENV === "development"
                ? 'localhost'
                : 'portfolio.iracanyes.com'
        });
        next();
    });
};
exports.Csurf = Csurf;
