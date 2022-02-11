import {Application} from "express";

export type RoutesInput = {
  app: Application
};

export type MailerConfigProps = {
  host: string;
  port: string;
  secure: boolean;
  auth: { user: string; pass: string; }
};

export type MailInputProps = {
  username: string;
  email: string;
  subject: string;
  message: string;
};
