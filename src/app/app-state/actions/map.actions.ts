import { createAction, props } from '@ngrx/store';
import { IMapPoint } from '../entity/abstract/i-map-point.model';


export const setMap = createAction(
    '[Home Page, Home Detail Page] SET_MAP',
    props<{ mapPoints: IMapPoint[] }>()
);
