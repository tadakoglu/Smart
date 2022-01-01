import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as propertyActions from '../actions/property.actions'
import { catchError, exhaustMap, map, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router';
import PropertyMockService from 'src/app/_services/mocks/property-mock.service';

@Injectable({
    providedIn: 'root'
})
export class PropertyEffects {
    constructor(private actions$: Actions, private service: PropertyMockService, private router: Router) { }

    navigateToProperty$ = createEffect(
        () => this.actions$.pipe(
            ofType(propertyActions.navigateToProperty),
            tap((property) => this.router.navigate(['/list/property/' + property.propertyId]))
        ),
        { dispatch: false }
    );


    setProperty$ = createEffect(() => this.actions$.pipe(
        ofType(propertyActions.setPropertyItem),
        exhaustMap(({ propertyId }) => this.service.getPropertyItem(propertyId).pipe(
            map(resp =>
                propertyActions.setPropertySuccess({ property: resp })),
            catchError((err) => of(propertyActions.setPropertyFailed({ error: err }))))
        ))
    )



}