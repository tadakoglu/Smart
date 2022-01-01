import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { State } from 'src/app/app-state';
import { selectProperty } from 'src/app/app-state/selectors/property.selectors';
import { IProperty } from 'src/app/app-state/entity/abstract/i-property.model';
import * as PropertyActions from 'src/app/app-state/actions/property.actions'
import { MapService } from 'src/app/_services/map.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  public paramsSub$: any
  public property$: Observable<IProperty>

  constructor(private readonly store: Store<State>, private activatedRoute: ActivatedRoute, private mapService: MapService) {
    this.property$ = this.store.select(selectProperty).pipe(takeUntil(this.destroy$))
  }

  ngOnInit() {

    combineLatest([this.activatedRoute.params, this.property$]).subscribe( val=>{
      let propertyId = val[0]['PropertyId']
      let property = val[1].geocode
      this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: propertyId })); // navigation already occured we will set only the values
      let geo = new maplibregl.LngLat(parseFloat(property.Longitude), parseFloat(property.Latitude))
      this.mapService.flyToNotifier.next(geo)
    })

    // this.paramsSub$ = this.activatedRoute.params.subscribe(val => {
    //   let propertyId = val['PropertyId']
    //   this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: propertyId })); // navigation already occured we will set only the values
    //   // flyto to operation on init
    //   console.log("property view initialized")
    // });




  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
