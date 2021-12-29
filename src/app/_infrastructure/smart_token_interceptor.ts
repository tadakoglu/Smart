import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, EMPTY } from 'rxjs';
import { switchMap, take, filter, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthDataService } from '../_services/auth-data.service';

@Injectable()
export class SmartTokenInterceptor implements HttpInterceptor {

    constructor(private authDataService: AuthDataService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.injectToken(request));
    }

    injectToken(request: HttpRequest<any>) {
        let token = this.authDataService.getAccessToken /* This is a test token provided by Smart */
        return request.clone({
            setParams: { token: token }
            // setHeaders: {
            //     Authorization: `Bearer ${token}`
            // }
        });
    }

}


