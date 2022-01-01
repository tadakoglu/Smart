import { Injectable } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IMapPoint } from '../app-state/entity/abstract/i-map-point.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  public mapLoaded = new BehaviorSubject<boolean>(false)
  public flyToNotifier = new Subject<IMapPoint>()
  public boundsToNotifier = new Subject<void>()

  get onFlyTo(): Observable<IMapPoint> {
    return this.flyToNotifier.asObservable()
  }
  get onBoundsTo(): Observable<void> {
    return this.boundsToNotifier.asObservable()
  }

  get onMapLoad(): Observable<boolean> {
    return this.mapLoaded.asObservable()
  }




}
