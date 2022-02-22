export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactInitResponse = {
  _csrf: string;
}
