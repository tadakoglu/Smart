import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, Observable, Subject, takeUntil } from 'rxjs';
import { State } from 'src/app/app-state';
import { selectProperty } from 'src/app/app-state/selectors/property.selectors';
import { IProperty } from 'src/app/app-state/entity/abstract/i-property.model';
import * as PropertyActions from 'src/app/app-state/actions/property.actions'
import { MapService } from 'src/app/_services/map.service';
import { ActivatedRoute } from '@angular/router';
import { MapPoint } from 'src/app/app-state/entity/concrete/map-point.model';
import { IMapPoint } from 'src/app/app-state/entity/abstract/i-map-point.model';

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
    //combineLatest
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(val => {
      let propertyId = val['PropertyId']
      this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: propertyId }));
    })
    this.property$.pipe(takeUntil(this.destroy$), filter(p => p.propertyID != 0)).subscribe(val => {
      let mapPoint: IMapPoint = new MapPoint()
      mapPoint.geocode.Latitude = val.geocode.Latitude
      mapPoint.geocode.Longitude = val.geocode.Longitude
      this.mapService.flyToNotifier.next(mapPoint)
    })

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
