import { NextFunction, Request, Response } from "express";
import Mailer from "../../config/nodemailer";
import { MailInputProps } from "../../types/types";
import DOMPurify from "dompurify";
import Validator from "validator";
import {IMessage} from "../../types/interface";
const mailerReady = (req: Request, res: Response, next: NextFunction) => {
  if(req.method !== "GET"){
    next();
  }

  const response = {
    message: "Hello, ready to hear from you!",
  };


  return res.send({...response });
};

const sendMail = (req: Request, res: Response, next: NextFunction) => {
  if(req.method !== "POST"){
    next();
  }
  const data = req.body as MailInputProps;

  const cleanData = sanitize(data);
  // console.log("sendMail POST request body", req.body);
  // console.log("sendMail POST data", data);
  // console.log("sendMail POST cookies", req.cookies);

  // Send mail
  const mailer: Mailer = new Mailer();
  const response = mailer.sendMail(cleanData);

  // Save message

  return res.send({response});
};

const sanitize = (data: MailInputProps) => {
  if(!Validator.isEmail(data.email)){
    throw new Error("Invalid email received!");
  }
  return Object.assign({}, {
    username: DOMPurify.sanitize(data.username),
    email: data.email,
    subject: DOMPurify.sanitize(data.subject),
    message: DOMPurify.sanitize(data.message)
  });
};

export  { sendMail, mailerReady };