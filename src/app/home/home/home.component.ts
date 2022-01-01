import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app-state';
import * as PropertyActions from 'src/app/app-state/actions/property.actions'
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectMapPoints } from 'src/app/app-state/selectors/map.selectors';
import { IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { IMapPoint } from 'src/app/app-state/entity/abstract/i-map-point.model';
import * as ListActions from 'src/app/app-state/actions/list.actions'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  public mapPoints$: Observable<IMapPoint[]>

  constructor(private readonly store: Store<State>, private activatedRoute: ActivatedRoute) {
    this.store.dispatch(ListActions.setList()); // load all data
    this.mapPoints$ = this.store.select(selectMapPoints).pipe(takeUntil(this.destroy$)) // load map points to map
  }

  ngOnInit() {}

  clickRecordOnTheMap($eventArgs: any) {
    let propertyId: number = $eventArgs;
    this.store.dispatch(PropertyActions.navigateToProperty({ propertyId: propertyId }))
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
