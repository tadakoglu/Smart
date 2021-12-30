import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app-state';
import { AgentInfo, ListFilter, Record } from 'src/app/app-state/entity/list.model';
import { selectAgentInfo, selectFilter, selectRecordsByFilter } from 'src/app/app-state/selectors/list.selectors';
import * as ListActions from 'src/app/app-state/actions/list.actions'
import * as PropertyActions from 'src/app/app-state/actions/property.actions'

import { Subject, takeUntil } from 'rxjs';
import { Geocode } from 'src/app/app-state/entity/geocode.model';
import { MapPoint } from 'src/app/app-state/entity/mapPoint.model';
import { selectMapPoints } from 'src/app/app-state/selectors/map.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  // public agentInfo: Observable<AgentInfo> // This can also be used with | async pipe so auto subscription
  // public records: Observable<Record[]> // This can also be used with | async pipe so auto subscription

  public agentInfo: AgentInfo = <AgentInfo>{}
  public filter: ListFilter = <ListFilter>{}
  public records: Record[] = []
  public mapPoints: MapPoint[] = []

  constructor(private readonly store: Store<State>) {
    this.store.select(selectAgentInfo).pipe(takeUntil(this.destroy$)).subscribe(agentInto => this.agentInfo = agentInto)
    this.store.select(selectFilter).pipe(takeUntil(this.destroy$)).subscribe(filter => this.filter = filter)
    this.store.select(selectRecordsByFilter).pipe(takeUntil(this.destroy$)).subscribe(records => this.records = records);
    this.store.select(selectMapPoints).pipe(takeUntil(this.destroy$)).subscribe(mps => this.mapPoints = mps);
  }

  ngOnInit() {
  }

  setPriceFilter($eventArgs: any) {
    let maxPrice: number = $eventArgs;
    this.store.dispatch(ListActions.setPriceFilter({ maxValue: maxPrice }))
  }
  setRoomsFilter($eventArgs: any) {
    let bedrooms: number[] = $eventArgs
    this.store.dispatch(ListActions.setRoomsFilter({ counts: bedrooms }))
  }
  setFavoriteFilter($eventArgs: any) {
    let favorite: boolean = $eventArgs;
    this.store.dispatch(ListActions.setFavoriteFilter({ isFavorite: favorite }))
  }

  clickRecord($eventArgs: any) {
    let record: Record = $eventArgs;
    this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: record.propertyID })) // That includes also "navigate to detail" effect
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
