import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IList } from 'src/app/app-state/entity/abstract/i-list.model';
import { List } from 'src/app/app-state/entity/concrete/list.model';
import { ListService } from '../list.service';
import SMART_LIST from './data/list.json';

@Injectable()
export default class ListMockService extends ListService {

  override getListItems(): Observable<IList> {
    return this.http.get<IList>('/assets/data/list.json');
  }

}
