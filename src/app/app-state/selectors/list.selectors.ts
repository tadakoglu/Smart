import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "..";
import { ListFilter } from "../entity/list.model";
import { ListState } from "../reducers/list.reducer";


export const selectList = (appState: State) => appState.list
export const selectListByFeatureSelector = createFeatureSelector<State>('list')


/* This will be used to filter flats */
export const selectRecordsByFilter = createSelector(selectList, (s: ListState) => s.list.records.
    filter((rec, index, recArr) => {
        let filter: ListFilter = s.filter // List filter

        let floorCondition = rec.floorplans.find(rfp => (rfp.price <= filter.maxPrice) && (filter.roomCounts.includes(rfp.bedrooms))) ?? false; // Max price and bedroom conditions
        let favoriteCondition: boolean = rec.favorite; // Favorite condition

        if (floorCondition && favoriteCondition) { // If there is a record that fits to all conditions, return it!
            return true
        }
        else {
            return false
        }
    }))
