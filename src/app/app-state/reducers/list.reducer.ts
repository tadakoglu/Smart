import { createReducer, on } from '@ngrx/store';
import * as listActions from '../actions/list.actions';
import * as _ from 'lodash'
import { List, ListFilter } from '../entity/list.model';

export interface ListState {
    list: List;
    filter:ListFilter
};

const initialState: ListState = {
    list: <List>{},
    filter: { maxPrice: 1995, roomCounts: [0, 1, 2, 3], isFavorite: false }
};

export const reducer = createReducer(
    initialState,

    on(listActions.setList,
        (state) => ({ ...state })
    ),
    on(listActions.setListSuccess,
        (state, { list }) => {
            let listClone:List = _.cloneDeep(list) // for immutability
            return { ...state, list: listClone };
        }
    ),


    /* Filter part */
    on(listActions.setPriceFilter,
        (state, { maxValue }) => ({ ...state, filter: {...state.filter, maxPrice:maxValue} }),
    ),
    on(listActions.setRoomsFilter,
        (state, { counts }) => ({ ...state, filter: {...state.filter, roomCounts:counts} }),
    ),
    on(listActions.setFavoriteFilter,
        (state, { isFavorite }) => ({ ...state, filter: {...state.filter, isFavorite:isFavorite} }),
    ),
    
);

