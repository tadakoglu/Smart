import { createAction, props } from '@ngrx/store';
import { Geocode } from '../entity/geocode.model';


export const setMap = createAction(
    '[Home Page, Home Detail Page] SET_MAP',
    props<{ geocodes: Geocode[] }>()
);
