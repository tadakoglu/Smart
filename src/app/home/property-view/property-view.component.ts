import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, skipWhile, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { State } from 'src/app/app-state';
import { selectProperty } from 'src/app/app-state/selectors/property.selectors';
import { IProperty } from 'src/app/app-state/entity/abstract/i-property.model';
import * as PropertyActions from 'src/app/app-state/actions/property.actions'
import { MapService } from 'src/app/_services/map.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as maplibregl from 'maplibre-gl';
import { IGeocode } from 'src/app/app-state/entity/abstract/i-geocode.model';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  public property$: Observable<IProperty>

  constructor(private readonly store: Store<State>, private activatedRoute: ActivatedRoute, private mapService: MapService) {
    this.property$ = this.store.select(selectProperty).pipe(takeUntil(this.destroy$))
  }

  ngOnInit() {
    combineLatest([this.activatedRoute.params, this.property$]).pipe(takeUntil(this.destroy$)).subscribe(val => {
      let propertyId = val[0]['PropertyId']
      this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: propertyId })); // navigation already occured we will set only the values
      let geo = new maplibregl.LngLat(parseFloat(val[1].geocode.Longitude), parseFloat(val[1].geocode.Latitude))
      this.mapService.flyToNotifier.next(geo)
    })

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
