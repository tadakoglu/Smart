
import { IGeocode } from "../abstract/i-geocode.model";
import { IMapPoint } from "../abstract/i-map-point.model";
import { Geocode } from "./geocode.model";

export class MapPoint implements IMapPoint {
    /* We will omit listId since you use a fixed a test list id in this project */
    
    propertyId: number = 0
    geocode: IGeocode = new Geocode();
}