
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as mapActions from '../actions/map.actions'
import { catchError, exhaustMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators'
import { of } from 'rxjs'
import { PropertyService } from 'src/app/_services/property.service';
import { Router } from '@angular/router';
import { Property } from '../entity/concrete/property.model';
import PropertyMockService from 'src/app/_services/mocks/property-mock.service';
import { Store } from '@ngrx/store';
import { State } from '..';
import { selectRouteParam, selectRouteParams } from '../selectors/router.selectors';
import { MapService } from 'src/app/_services/map.service';
import * as maplibregl from 'maplibre-gl';

@Injectable({
    providedIn: 'root'
})
export class MapEffects {
    constructor(private actions$: Actions, private service: PropertyMockService, private mapService:MapService, private readonly store: Store<State>, private router: Router) { }

    /* We will navigate to property page after setting its values, this is a setProperty helper effect */
   
    fitMapBoundsTo$ = createEffect(
        () => this.actions$.pipe(
            ofType(mapActions.fitMapBoundsTo),
            tap(() => {
                this.mapService.boundsToNotifier.next()
            })
        ),
        { dispatch: false }
    );

  


    flyToMapPoint$ = createEffect(
        () => this.actions$.pipe(
            ofType(mapActions.flyToMapPoint),
            tap(args => {
                this.mapService.flyToNotifier.next(args.mapPoint)
            })
        ),
        { dispatch: false }
    );



}