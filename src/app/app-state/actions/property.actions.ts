import { createAction, props } from '@ngrx/store';
import { IProperty } from '../entity/abstract/i-property.model';

export const navigateToProperty = createAction(
    '[Home Detail Page] NAVIGATE_TO_PROPERTY',
    props<{ propertyId: number }>()
);

export const setPropertyItem = createAction(
    '[Home Detail Page] SET_PROPERTY_ITEM', 
    props<{ propertyId: number }>());


export const setPropertySuccess = createAction(
        '[Home Detail Page] SET_PROPERTY_ITEM_SUCCESS',
        props<{ property: IProperty }>()
    );
export const setPropertyFailed = createAction(
    '[Home Detail Page] SET_PROPERTY_ITEM_FAILED',
    props<{ error: string }>()
);



