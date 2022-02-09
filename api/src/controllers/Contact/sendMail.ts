import {Request, Response} from "express";
import nodemailer from "nodemailer";

const sendMail = (req: Request, res: Response) => {
  const data = req.body;

  console.log("sendMail controller data", data);

  const response = { message: "Send mail ready!", data };
  return res.send({response});
};

export default sendMail;