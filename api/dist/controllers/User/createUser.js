"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("../../models/User.model"));
const createUser = ({ email, name }) => {
    return User_model_1.default.create({
        email,
        name
    })
        .then((data) => {
        return data;
    })
        .catch((e) => {
        throw e;
    });
};
exports.default = createUser;
