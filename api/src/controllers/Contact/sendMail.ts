import { NextFunction, Request, Response } from "express";
import Mailer from "../../config/nodemailer";
import { MailInputProps } from "../../types/types";

const mailerReady = (req: Request, res: Response, next: NextFunction) => {
  if(req.method !== "GET"){
    next();
  }

  const data = req.body as MailInputProps;

  console.log("sendMail controller data", data);

  const response = {
    message: "GET - Send mail ready!",
  };
  return res.send({...response, csrfToken: req.csrfToken() });
};

const sendMail = (req: Request, res: Response) => {
  const data = req.body as MailInputProps;

  console.log("sendMail controller request body", req.body);
  console.log("sendMail controller data", data);

  // Send mail
  const mailer: Mailer = new Mailer();
  const response = mailer.sendMail(data);

  // Save message

  return res.send({response});
};

export  { sendMail, mailerReady };