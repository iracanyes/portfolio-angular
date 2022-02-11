import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, retry } from "rxjs";
import HttpErrorHandlerService from "./HttpErrorHandler.service";

@Injectable({
  providedIn: "root"
})
class HttpService {
  private httpErrorHandler: HttpErrorHandlerService;
  constructor(
    private http: HttpClient,
  ) {
    this.httpErrorHandler = new HttpErrorHandlerService('HttpService');
  }

  get(url: string, options: any = {}){
    /* Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

     */
    console.log("HttpService get Method");
    return this.http.get(url, options)
      .pipe(catchError(this.httpErrorHandler.error('get', [])));
  }
}

