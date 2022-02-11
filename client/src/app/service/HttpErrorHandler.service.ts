import { Injectable } from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
class HttpErrorHandlerService {
  /**
   *
   * @param service_name string
   */
  constructor(private service_name: string) {
  }

  error<T>(operation = 'operation', result = {} as T){
    return (error: HttpErrorResponse ): Observable<T> => {
      const message = (error.error instanceof ErrorEvent)
        ? error.error.message
        : `Server returned code ${error.status} and body:\n${error.error}`
      // Logging
      console.log(error);

      return of(result);
    };
  }

}

export default HttpErrorHandlerService;
