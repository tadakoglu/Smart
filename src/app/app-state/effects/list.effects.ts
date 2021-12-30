import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as listActions from '../actions/list.actions'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { ListService } from 'src/app/_services/list.service';
import { IList } from '../entity/abstract/i-list.model';
import { List } from '../entity/concrete/list.model';
import ListMockService from 'src/app/_services/mocks/list-mock.service';
@Injectable({
    providedIn: 'root'
})
export class ListEffects {
    constructor(private actions$: Actions, private service: ListMockService) { }

    setList$ = createEffect(() => this.actions$.pipe(
        ofType(listActions.setList),
        exhaustMap((props) => this.service.getListItems().pipe(
            map(resp => listActions.setListSuccess({ list: resp })),
            catchError((err) => of(listActions.setListFailed({ error: err }))))
        )))


}