import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IList } from 'src/app/app-state/entity/abstract/i-list.model';
import { ListService } from '../list.service';

@Injectable({
  providedIn: 'root'
})
export class ListMockService extends ListService {


  override getListItems(): Observable<IList> {
    throw new Error('Method not implemented.');
  }

}
