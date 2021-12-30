import { createReducer, on } from '@ngrx/store';
import * as propertyActions from '../actions/property.actions';
import * as _ from 'lodash'
import { Property } from '../entity/property.model';

export interface PropertyState {
    property: Property;
};

const initialState: PropertyState = {
    property: <Property>{},
};

export const reducer = createReducer(
    initialState,

    on(propertyActions.setPropertyItem,
        (state, {propertyId}) => ({ ...state })
    ),
    on(propertyActions.setPropertySuccess,
        (state, { property }) => {
            let propertyClone: Property = _.cloneDeep(property) // for immutability
            return { ...state, property: propertyClone };
        }
    ),

);

