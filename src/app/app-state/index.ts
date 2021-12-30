import { ActionReducerMap } from "@ngrx/store";
import { ListState } from "./reducers/list.reducer";
import { PropertyState } from "./reducers/property.reducer";
import { RouterState, routerReducer } from "@ngrx/router-store";
import * as listReducer from './reducers/list.reducer'
import * as propertyReducer from './reducers/property.reducer'

export interface State {
    router: RouterState,
    list: ListState,
    property: PropertyState
}

/* Map states to reducers for app module */
/* Here, object keys should have the same name with the related State interface property above */
export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    list: listReducer.reducer,
    property: propertyReducer.reducer 
}
