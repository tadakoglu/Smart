import { BACK_END_API } from 'src/app/_infrastructure/contstants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PropertyService {

  /* PLEAESE NOTE THAT JWT TOKENS ARE SENT THROUGH TOKEN INTERCEPTOR INFRASTRUCTURE AUTOMATICALLY */

  constructor(private http: HttpClient) { }

  getPropertyItem(propertyID: number): Observable<HttpResponse<any>> {
    let listID: number = 5363950 /* Our default list ID */
    let httpParams = new HttpParams({ fromObject: { listID: listID, propertyID } }); /* Create HTTP params for the request */
    return this.http.get<HttpResponse<any>>(BACK_END_API + "List/json/propertyItem.aspx", { params: httpParams });
  }

  // getOptions(): object {
  //   return { observe: "response", headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  // }

}
