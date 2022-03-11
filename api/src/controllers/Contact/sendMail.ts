import { NextFunction, Request, Response } from "express";
import Mailer from "../../config/nodemailer";
import { MailInputProps } from "../../types/types";

const mailerReady = (req: Request, res: Response, next: NextFunction) => {
  if(req.method !== "GET"){
    next();
  }

  const response = {
    message: "Hello, ready to hear from you!",
  };


  return res.send({...response });
};

const sendMail = (req: Request, res: Response) => {
  const data = req.body as MailInputProps;

  // console.log("sendMail POST request body", req.body);
  // console.log("sendMail POST data", data);
  // console.log("sendMail POST cookies", req.cookies);

  // Send mail
  const mailer: Mailer = new Mailer();
  const response = mailer.sendMail(data);

  // Save message

  return res.send({response});
};

export  { sendMail, mailerReady };