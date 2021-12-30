import { Injectable } from '@angular/core';
import { find, Observable, of, map, filter, take, mergeMap, first } from 'rxjs';
import { IProperty } from 'src/app/app-state/entity/abstract/i-property.model';
import { Property } from 'src/app/app-state/entity/concrete/property.model';
import { PropertyService } from '../property.service';

@Injectable()
export default class PropertyMockService extends PropertyService {


  override getPropertyItem(propertyID: number): Observable<IProperty> {
    let propertyFinderFunc = (props:IProperty[], propId:number) => props.find(p => p.propertyID == propId) ?? new Property()
    return this.http.get<IProperty[]>('/assets/data/properties.json').pipe( map(properties => propertyFinderFunc(properties,propertyID)))
  }

}
