import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { State } from 'src/app/app-state';
import { selectProperty } from 'src/app/app-state/selectors/property.selectors';
import * as PropertyActions from 'src/app/app-state/actions/property.actions'
import { selectMapPoint } from 'src/app/app-state/selectors/map.selectors';
import { Property } from 'src/app/app-state/entity/concrete/property.model';
import { MapPoint } from 'src/app/app-state/entity/concrete/map-point.model';
import { IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { IProperty } from 'src/app/app-state/entity/abstract/i-property.model';
import { IMapPoint } from 'src/app/app-state/entity/abstract/i-map-point.model';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();


  public property$: Observable<IProperty>
  public mapPoint$: Observable<IMapPoint>

  constructor(private readonly store: Store<State>) {
    this.property$ = this.store.select(selectProperty).pipe(takeUntil(this.destroy$))
    this.mapPoint$ = this.store.select(selectMapPoint).pipe(takeUntil(this.destroy$))
  }

  ngOnInit() {
  }

  loadProperty() {
    //this.store.dispatch(PropertyActions.setPropertyItem());
  }

  clickRecord($eventArgs: any) {
    let record: IRecord = $eventArgs;
    this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: record.propertyID })) // That includes also "navigate to detail" effect
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
