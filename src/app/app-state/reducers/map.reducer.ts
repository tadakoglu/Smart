import { createReducer, on } from '@ngrx/store';
import * as mapActions from '../actions/map.actions';
import * as _ from 'lodash'
import { Geocode } from '../entity/geocode.model';

export interface MapState {
    geocodes: Geocode[];
};

const initialState: MapState = {
    geocodes: [],
};

export const reducer = createReducer(
    initialState,

    on(mapActions.setMap,
        (state, { geocodes }) => ({ ...state, geocodes: geocodes })
    ),

);

