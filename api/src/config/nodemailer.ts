import nodemailer from "nodemailer";
import { MailerConfigProps, MailInputProps } from "../types/types";

class Mailer{
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USERNAME,
        pass: process.env.MAILER_USERPWD,
      },
      tls: {
        // Authorize self-signed certificates
        rejectUnauthorized: false,
      }
    });
  }

  public async sendMail(data: MailInputProps){
    const res = await this.transporter.sendMail({
      from: `${data.username} <${data.email}>`,
      to: "iracanyes@gmail.com, k.iracanye@gmail.com",
      subject: data.subject,
      text: data.message
    });

    return {
      statusCode: 200,
      response: res,
    };
  }
};

export default Mailer;