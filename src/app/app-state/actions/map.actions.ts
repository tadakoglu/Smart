import { createAction, props } from '@ngrx/store';
import { IMapPoint } from '../entity/abstract/i-map-point.model';


export const setMap = createAction(
    '[Home Page, Home Detail Page] SET_MAP',
    props<{ mapPoints: IMapPoint[] }>()
);


export const flyToMapPoint = createAction(
    '[Home Page, Home Detail Page] FLY_TO_MAP',
    props<{ mapPoint: maplibregl.LngLat }>()
);

export const fitMapBoundsTo = createAction(
    '[Home Page, Home Detail Page] FIT_MAP_BOUNDS_TO'
);