import { createReducer, on } from '@ngrx/store';
import * as mapActions from '../actions/map.actions';
import * as _ from 'lodash'
import { Geocode } from '../entity/geocode.model';
import { MapPoint } from '../entity/mapPoint.model';

export interface MapState {
    mapPoints: MapPoint[];
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

