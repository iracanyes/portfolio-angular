import csurf from "csurf";
import {Application, Request} from "express";
import {Router} from "express";


export const csrfProtection = csurf({
  cookie: {
    httpOnly: false,
    signed: false,
    secure: true,
    maxAge: 6 * 60 * 60 * 1000,
    domain: process.env.NODE_ENV === "development"
    ? 'localhost'
    : process.env.CLIENT_DOMAIN
  },
  ignoreMethods: ["GET","HEAD","OPTIONS"],
  value: (req: Request) => {

    return req.cookies['XSRF-TOKEN'] as string;
  }
});

export const Csurf = (app: Application, router: Router) => {

  app.all("*", csrfProtection, (req, res,  next ) => {
    res.cookie('XSRF-TOKEN', req.csrfToken() ,{
      //path: '/',
      httpOnly: false,
      secure: true,
      maxAge: 6 * 60 * 60 * 1000,
      domain: process.env.NODE_ENV === "development"
        ? 'localhost'
        : process.env.CLIENT_DOMAIN
    });
    next();
  })
}