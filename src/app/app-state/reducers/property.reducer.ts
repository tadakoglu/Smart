import { createReducer, on } from '@ngrx/store';
import * as propertyActions from '../actions/property.actions';
import * as _ from 'lodash'
import { IProperty } from '../entity/abstract/i-property.model';
import { Property } from '../entity/concrete/property.model';

export interface PropertyState {
    property: IProperty;
    loaded:boolean
};

const initialState: PropertyState = {
    property: new Property(),
    loaded: false
};

export const reducer = createReducer(
    initialState,

    on(propertyActions.setPropertyItem,
        (state, {}) => ({ ...state })
    ),
    on(propertyActions.setPropertySuccess,
        (state, { property }) => {
            let propertyClone: IProperty = _.cloneDeep(property) // for immutability
            return { ...state, property: propertyClone };
        }
    ),

);

