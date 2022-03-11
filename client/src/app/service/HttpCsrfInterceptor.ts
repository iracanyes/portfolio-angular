import { Injectable } from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";
import { HttpXsrfTokenExtractor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpCsrfInterceptor implements HttpInterceptor{

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Retrieve cookie with the provided cookieName in module definition
    const token = this.tokenExtractor.getToken() as string;


    if(token !== null && !req.headers.has('X-XSRF-TOKEN')){
      req = req.clone({
        headers: req.headers.set('X-XSRF-TOKEN', token),
        // Allow to attach all cookies to request
        withCredentials: true
      });
    }

    return next.handle(req);
  }
}

