import { Injectable } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  public mapLoaded = new BehaviorSubject<boolean>(false)
  public flyToNotifier = new Subject<maplibregl.LngLat>()
  public boundsToNotifier = new Subject<void>()

  get onFlyTo(): Observable<maplibregl.LngLat> {
    return this.flyToNotifier.asObservable()
  }
  get onBoundsTo(): Observable<void> {
    return this.boundsToNotifier.asObservable()
  }

  get onMapLoad(): Observable<boolean> {
    return this.mapLoaded.asObservable()
  }




}
