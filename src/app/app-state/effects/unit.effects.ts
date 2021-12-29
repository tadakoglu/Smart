import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as unitActions from '../actions/unit.actions'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { CoreService } from 'src/app/_services/core.service';

@Injectable({
    providedIn: 'root'
})
export class UnitEffects {
    constructor(private actions$: Actions, private service: CoreService) { }

    // setAllItems$ = createEffect(() => this.actions$.pipe(
    //     ofType(unitActions.setAllItems),
    //     exhaustMap((props) => this.service.getUnitItems$().pipe(
    //         map(resp => unitActions.setAllItemsSuccess({ items: resp })),
    //         catchError((err) => of(unitActions.setAllItemsFailed({ error: err }))))
    //         )))

       
}