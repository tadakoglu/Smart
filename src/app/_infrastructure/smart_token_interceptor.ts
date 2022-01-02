import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, EMPTY } from 'rxjs';
import { AuthDataService } from '../_services/auth-data.service';

@Injectable()
export class SmartTokenInterceptor implements HttpInterceptor {

    constructor(private authDataService: AuthDataService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.injectToken(request));
    }

    /* Note that I personally recommand sending tokens in headers to enforce security instead of as being params, I will adhere to the convention in the default infrastructure  */
    injectToken(request: HttpRequest<any>) {
        let token = this.authDataService.getAccessToken /* This is a test token provided by Smart */
        return request.clone({
            setParams: { token: token },
            // setHeaders: {
            //     "referer": "https://my.smartapartmentdata.com/"
            // }
        });
    }

}


