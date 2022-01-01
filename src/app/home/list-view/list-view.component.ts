import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app-state';
import { selectListState } from 'src/app/app-state/selectors/list.selectors';
import * as ListActions from 'src/app/app-state/actions/list.actions'
import * as PropertyActions from 'src/app/app-state/actions/property.actions'
import { Observable, Subject, takeUntil } from 'rxjs';
import { IListFilter, IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { ListState } from 'src/app/app-state/reducers/list.reducer';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/_services/map.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent implements OnInit, OnDestroy{

  destroy$: Subject<boolean> = new Subject<boolean>();

  public listState$: Observable<ListState>


  constructor(private readonly store: Store<State>, private activatedRoute: ActivatedRoute, private mapService: MapService) {
    this.listState$ = this.store.select(selectListState).pipe(takeUntil(this.destroy$))
  }

  ngOnInit() {
    // when list view activated, show all pins on the map
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(val => {
      console.log("list view reactivated ")
      this.mapService.boundsToNotifier.next()
    })
  }

  setFilter($eventArgs: any) {
    let filter: IListFilter = $eventArgs;
    this.store.dispatch(ListActions.setFilterAll({ filter: filter }))
  }

  clickRecord($eventArgs: any) {
    let record: IRecord = $eventArgs;
    this.store.dispatch(PropertyActions.navigateToProperty({ propertyId: record.propertyID })) // That includes also "navigate to detail" effect
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
