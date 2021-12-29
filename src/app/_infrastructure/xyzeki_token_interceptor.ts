// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable, BehaviorSubject, Subject, EMPTY } from 'rxjs';
// import { switchMap, take, filter, catchError } from 'rxjs/operators';
// import { Router } from '@angular/router';
// import { EuroAuthService } from '../auth-services/euro-auth-service';
// import { EuroAuthHelpersService } from '../auth-services/euro-auth-helpers-service';
// import { DataSharedService } from '../admin/model/dataShared.service';
// import { AuthService } from '../model/services/auth-service.service';


// @Injectable()
// export class XyzekiRefreshTokenInterceptor implements HttpInterceptor {
//     private refreshTokenInProgress = false;
//     private refreshTokenSubject: Subject<any> = this.dataService.refreshTokenSubject;

//     constructor(private dataService: DataSharedService, public router: Router,
//         private euroAuthService: EuroAuthService, 
//         private euroAuthHelpersService: EuroAuthHelpersService,
//         private authService: AuthService) { }
        
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//         if (request.url.indexOf('Account/RefreshToken') !== -1) { // refresh token isteklerine bir şey iliştirmeden(token vb.) aynen ilet.
//             return next.handle(request);
//         }

//         const accessExpired = this.euroAuthService.IsAccessTokenExpired
//         const refreshExpired = this.euroAuthService.IsRefreshTokenExpired


//         if (accessExpired && refreshExpired) { // normal token ve refresh token her ikisininn süresi bittiyse herhangi bir şey yapma aynen ilet
//             return next.handle(request);        // ya da log out olup observable error fırlatılabilir.
//         }
//         if (accessExpired && !refreshExpired) { // normal token süresi bitti ancak REFRESH tokeninki bitmediyse
//             if (!this.refreshTokenInProgress) {
//                 this.refreshTokenInProgress = true;
//                 this.refreshTokenSubject.next(null);

//                 let accessToken = this.euroAuthService.AccessToken;
               
//                 // send old tokens, get new ones.
//                 return this.authService.refreshToken(accessToken).pipe(
//                     switchMap((authResponse) => {

//                         console.log('yeni access token alındı' )
//                         console.log('yeni refresh token alındı' )

//                         this.euroAuthHelpersService.SaveAccessToken(authResponse.token);
//                         this.euroAuthHelpersService.SaveRefreshToken(authResponse.refreshToken, authResponse.refreshTokenExpiration);


//                         this.refreshTokenInProgress = false;
//                         this.refreshTokenSubject.next(authResponse.token); // InjectToken method will gain access token from LS when here sends 'ready' signal.
//                         return next.handle(this.injectToken(request));
//                     }), catchError((err) => {
//                         this.euroAuthHelpersService.DeAuth();
                        
//                         return EMPTY
//                     }),
//                 );
//             } else {
//                 return this.refreshTokenSubject.pipe(
//                     filter(result => result !== null),
//                     take(1),
//                     switchMap((accessToken) => { // Inject token will already get accessToken from LS
//                         return next.handle(this.injectToken(request))
//                     })
//                 );
//             }
//         }

//         if (!accessExpired) { // normal tokenin süresi bitmediyse onu isteğe iliştir.
//             return next.handle(this.injectToken(request));
//         }
//     }

//     injectToken(request: HttpRequest<any>) {
//         const token = this.euroAuthService.AccessToken
//         return request.clone({
//             setHeaders: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//     }

// }


