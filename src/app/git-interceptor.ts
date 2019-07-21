import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GitInterceptor implements HttpInterceptor {
  baseUrl = `https://api.github.com`;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${this.baseUrl}/${req.url}` });
    return next.handle(apiReq);
  }
}
