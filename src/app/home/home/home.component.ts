import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app-state';
import { selectAgentInfo, selectFilter, selectRecordsByFilter } from 'src/app/app-state/selectors/list.selectors';
import * as ListActions from 'src/app/app-state/actions/list.actions'
import * as PropertyActions from 'src/app/app-state/actions/property.actions'

import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { selectMapPoints } from 'src/app/app-state/selectors/map.selectors';
import { AgentInfo, ListFilter } from 'src/app/app-state/entity/concrete/list.model';
import { IAgentInfo, IListFilter, IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { IMapPoint } from 'src/app/app-state/entity/abstract/i-map-point.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  // public agentInfo: Observable<AgentInfo> // This can also be used with | async pipe so auto subscription
  //public records: Observable<IRecord[]> // This can also be used with | async pipe so auto subscription

  public agentInfo$: Observable<IAgentInfo>
  public filter$: Observable<IListFilter>
  public records$: Observable<IRecord[]>
  public mapPoints$: Observable<IMapPoint[]>

  constructor(private readonly store: Store<State>) {
    this.loadList();
    this.agentInfo$ = this.store.select(selectAgentInfo).pipe(takeUntil(this.destroy$))
    this.filter$= this.store.select(selectFilter).pipe(takeUntil(this.destroy$))
    this.records$ = this.store.select(selectRecordsByFilter).pipe(takeUntil(this.destroy$))
    this.mapPoints$ = this.store.select(selectMapPoints).pipe(takeUntil(this.destroy$))
  }

  ngOnInit() {
  }

  loadList() {
    this.store.dispatch(ListActions.setList());
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
    let record: IRecord = $eventArgs;
    this.store.dispatch(PropertyActions.setPropertyItem({ propertyId: record.propertyID })) // That includes also "navigate to detail" effect
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
