import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "..";
import { IRecord } from "../entity/abstract/i-list.model";
import { IMapPoint } from "../entity/abstract/i-map-point.model";
import { IProperty } from "../entity/abstract/i-property.model";
import { selectRecordsByFilter } from "./list.selectors";


export const selectProperty = (appState: State) => appState.property.property
export const selectPropertyByFeatureSelector = createFeatureSelector<State>('property')


export const selectMapPoints = createSelector(selectRecordsByFilter, (records: IRecord[]) =>
    records.map(rec => <IMapPoint>{ properties: { propertyId: rec.propertyID.toString() }, geocode: rec.geocode }))

export const selectMapPoint = createSelector(selectProperty, (p: IProperty) =>
    <IMapPoint>{ properties: { propertyId: p.propertyID.toString() }, geocode: p.geocode })
