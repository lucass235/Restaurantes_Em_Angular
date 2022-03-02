import { LoginService } from "./login/login.service";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);
    if (loginService.isLoggedIn()) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loginService.user.accessToken}`,
        },
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
