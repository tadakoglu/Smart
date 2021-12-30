import { IGeocode } from "./i-geocode.model";

export interface IMapPoint {
    /* We will omit listId since you use a fixed a test list id in this project */
    propertyId: number;
    geocode: IGeocode
}