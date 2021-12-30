import { createAction, props } from '@ngrx/store';
import { Geocode } from '../entity/geocode.model';
import { MapPoint } from '../entity/mapPoint.model';


export const setMap = createAction(
    '[Home Page, Home Detail Page] SET_MAP',
    props<{ mapPoints: MapPoint[] }>()
);
