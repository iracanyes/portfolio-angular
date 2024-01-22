"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const store = new MongoDBStore({
    uri: process.env.MONGODB_SESSION_AUTH_URL,
    databaseName: 'portfolio',
    collection: 'mySessions'
});
const sessionOpt = {
    name: 'myCookieSessionId',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        domain: process.env.NODE_ENV === "development"
            ? 'localhost'
            : 'portfolio.iracanyes.com'
    }
};
const MySession = (app) => {
    // For secure cookies
    app.set('trust proxy', 1);
    // @ts-ignore
    app.use((0, express_session_1.default)(sessionOpt));
};
exports.default = MySession;
