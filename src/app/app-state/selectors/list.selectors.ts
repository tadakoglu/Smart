import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "..";
import { IListFilter } from "../entity/abstract/i-list.model";
import { ListState } from "../reducers/list.reducer";


export const selectListState = (appState: State) => appState.list
// export const selectListByFeatureSelector = createFeatureSelector<State>('list')

/* Select agent info of the list */
export const selectAgentInfo = createSelector(selectListState, (s: ListState) => s.list.agentInfo)

/* Select current filter */
export const selectFilter = (appState: State) => appState.list.filter


/* Select filtered records of the list */
export const selectRecordsByFilter = createSelector(selectListState, (s: ListState) => s.list.records.
    filter((rec, index, recArr) => {
        let filter: IListFilter = s.filter // List filter

        let floorCondition = rec.floorplans.find(rfp => (rfp.price <= filter.maxPrice) && (filter.roomCounts.includes(rfp.bedrooms))) ?? false; // Max price and bedroom conditions
        let favoriteCondition: boolean = rec.favorite; // Favorite condition

        if (floorCondition && favoriteCondition) { // If there is a record that fits to all conditions, return it!
            return true
        }
        else {
            return false
        }
    }))



