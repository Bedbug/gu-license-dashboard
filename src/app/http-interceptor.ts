import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor( private sessionService: SessionService ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.sessionService.token)
      request = request.clone({
        headers: request.headers
          .set('X-Access-Token', this.sessionService.token)
          .set('Access-Control-Allow-Origin', '*')
          .set('Accept', 'application/json')
      });

    //console.log(request.url);
    return next.handle(request).pipe( tap(evt => {
      if (evt instanceof HttpResponse && evt.headers.has('X-Access-Token'))
        this.sessionService.token = evt.headers.get('X-Access-Token');
    }),
    catchError((error: HttpErrorResponse) => {
      let data = {};
      data = {
          url: error.url,
          message: error.message,
          status: error.status
      };
      console.log(data);
      return throwError(error);
    }));
  }
}
