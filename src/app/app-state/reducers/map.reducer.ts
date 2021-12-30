import { createReducer, on } from '@ngrx/store';
import * as mapActions from '../actions/map.actions';
import * as _ from 'lodash'
import { IMapPoint } from '../entity/abstract/i-map-point.model';

export interface MapState {
    mapPoints: IMapPoint[];
};

const initialState: MapState = {
    mapPoints: [],
};

export const reducer = createReducer(
    initialState,

    on(mapActions.setMap,
        (state, { mapPoints }) => ({ ...state, mapPoints: mapPoints })
    ),

);

