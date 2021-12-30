import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "..";
import { PropertyState } from "../reducers/property.reducer";


export const selectProperty = (appState: State) => appState.property.property
export const selectPropertyByFeatureSelector = createFeatureSelector<State>('property')



