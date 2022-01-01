import { Injectable } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  public flyToNotifier = new Subject<maplibregl.LngLat>()
  public boundsToNotifier = new Subject<void>()

  get onFlyTo(): Observable<maplibregl.LngLat> {
    return this.flyToNotifier.asObservable()
  }
  get onBoundsTo(): Observable<void> {
    return this.boundsToNotifier.asObservable()
  }




}
