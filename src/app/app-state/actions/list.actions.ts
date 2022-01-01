import { createAction, props } from '@ngrx/store';
import { IList, IListFilter } from '../entity/abstract/i-list.model';

export const setList = createAction(
    '[Home Page] SET_LIST_ITEMS');

export const setListSuccess = createAction(
    '[Home Page] SET_LIST_ITEMS_SUCCESS',
    props<{ list: IList }>()
);
export const setListFailed = createAction(
    '[Home Page] SET_LIST_ITEMS_FAILED',
    props<{ error: string }>()
);


// /* Filter actions */
export const setPriceFilter = createAction(
    '[Home Page] SET_PRICE_FILTER',
    props<{ maxValue: number }>()
);

export const setRoomsFilter = createAction(
    '[Home Page] SET_ROOM_FILTER',
    props<{ counts: number[] }>()
);

export const setFavoriteFilter = createAction(
    '[Home Page] SET_FAVORITE_FILTER',
    props<{ isFavorite: boolean }>()
);

export const setFilterAll = createAction(
    '[Home Page] SET_FAVORITE_FILTER',
    props<{ filter:IListFilter }>()
);


