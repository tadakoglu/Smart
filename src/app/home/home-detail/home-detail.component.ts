import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { State } from 'src/app/app-state';
import { Record } from 'src/app/app-state/entity/list.model';
import { Property } from 'src/app/app-state/entity/property.model';
import { selectProperty } from 'src/app/app-state/selectors/property.selectors';
import * as ListActions from 'src/app/app-state/actions/list.actions'
import * as PropertyActions from 'src/app/app-state/actions/property.actions'
import { selectMapPoint } from 'src/app/app-state/selectors/map.selectors';
import { MapPoint } from 'src/app/app-state/entity/mapPoint.model';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  public property: Property = <Property>{}
  public mapPoint: MapPoint = <MapPoint>{}

  constructor(private readonly store: Store<State>) {
    this.store.select(selectProperty).pipe(takeUntil(this.destroy$)).subscribe(property => this.property = property)
    this.store.select(selectMapPoint).pipe(takeUntil(this.destroy$)).subscribe(mapPoint => this.mapPoint = mapPoint)

  }

  ngOnInit() {
  }


  clickRecord($eventArgs: any) {
    let record: Record = $eventArgs;
    this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: record.propertyID })) // That includes also "navigate to detail" effect
  }

}
