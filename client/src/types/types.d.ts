export type ContactMessage = {
  name: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
}

export type ContactInitResponse = {
  csrfToken: string;
}
