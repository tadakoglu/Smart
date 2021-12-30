import { createAction, props } from '@ngrx/store';
import { Property } from '../entity/property.model';


export const setPropertyItem = createAction(
    '[Home Detail Page] SET_PROPERTY_ITEM',
    props<{ propertyId: number }>()
);

export const setPropertySuccess = createAction(
    '[Home Detail Page] SET_PROPERTY_ITEM_SUCCESS',
    props<{ property: Property }>()
);
export const setPropertyFailed = createAction(
    '[Home Detail Page] SET_PROPERTY_ITEM_FAILED',
    props<{ error: string }>()
);



