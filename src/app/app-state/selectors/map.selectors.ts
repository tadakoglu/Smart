import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "..";
import { Record } from "../entity/list.model";
import { MapPoint } from "../entity/mapPoint.model";
import { Property } from "../entity/property.model";
import { ListState } from "../reducers/list.reducer";
import { PropertyState } from "../reducers/property.reducer";
import { selectRecordsByFilter } from "./list.selectors";


export const selectProperty = (appState: State) => appState.property.property
export const selectPropertyByFeatureSelector = createFeatureSelector<State>('property')


export const selectMapPoints = createSelector(selectRecordsByFilter, (records: Record[]) =>
    records.map(rec => <MapPoint>{ propertyId: rec.propertyID, geocode: rec.geocode }))

export const selectMapPoint = createSelector(selectProperty, (p: Property ) => <MapPoint>{ propertyId: p.propertyID, geocode: p.geocode})
