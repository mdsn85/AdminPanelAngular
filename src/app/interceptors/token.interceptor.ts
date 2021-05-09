import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercept');
    if (this.authService.isLoggedIn == true) {
      const token = this.authService.getAccessToken();

      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
    }
    console.log(JSON.stringify( request));
    return next.handle(request);
  }
}
