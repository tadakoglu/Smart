import { Geocode } from "./geocode.model";

export interface MapPoint {
    /* We will omit listId since you use a fixed a test list id in this project */
    propertyId: number;
    geocode: Geocode
}