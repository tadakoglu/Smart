import { BACK_END_API } from 'src/app/_infrastructure/contstants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IList } from '../app-state/entity/abstract/i-list.model';

@Injectable()
export class ListService {

  /* PLEAESE NOTE THAT JWT TOKENS ARE SENT THROUGH TOKEN INTERCEPTOR INFRASTRUCTURE AUTOMATICALLY */

  constructor(protected http: HttpClient) { }

  getListItems(): Observable<IList> {
    let listID: number = 5363950 /* Our default list ID */
    let receipt = 'undefined';
    let httpParams = new HttpParams({ fromObject: { listID: listID, receipt: receipt } }); /* Create HTTP params for the request */
    return this.http.get<IList>(BACK_END_API + "myapi/List/json/listItems.aspx", { params: httpParams  }, );
  }
 

  // getOptions(): object {
  //   return { observe: "response", headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
  // }

}
