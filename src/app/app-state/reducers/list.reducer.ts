import { createReducer, on } from '@ngrx/store';
import * as listActions from '../actions/list.actions';
import * as _ from 'lodash'
import { IList, IListFilter } from '../entity/abstract/i-list.model';
import { List, ListFilter } from '../entity/concrete/list.model';

export interface ListState {
    list: IList;
    filter:IListFilter
    loaded:boolean
};


const initialState: ListState = {
    list: new List(),
    filter: new ListFilter(),
    loaded: false
};

export const reducer = createReducer(
    initialState,

    on(listActions.setList,
        (state) => ({ ...state })
    ),
    on(listActions.setListSuccess,
        (state, { list }) => {
            let listClone:IList = _.cloneDeep(list) // for immutability
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

    on(listActions.setFilterAll,
        (state, { filter }) => ({ ...state, filter: {...filter }}),
    ),
    
);

