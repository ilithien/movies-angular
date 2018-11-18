import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/login') === -1) {
      return next.handle(req); // Only activate the interceptor when trying to log-in
    }

    const { username } = req.body;
    const validUsers = ['Yoda', 'Frodo'];

    return of(null).pipe(mergeMap(() => {


      if (validUsers.indexOf(username) > -1) {
        return of(new HttpResponse({ status: 200, body: { token: 'SUPERCOOLTOKENHERE' } }))
      } else {
        return of(new HttpResponse({ status: 401, body: { token: null } }))
      }
    }))
  }
}