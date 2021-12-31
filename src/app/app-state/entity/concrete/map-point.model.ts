
import { IGeocode } from "../abstract/i-geocode.model";
import { IMapPoint } from "../abstract/i-map-point.model";
import { Geocode } from "./geocode.model";

export class MapPoint implements IMapPoint {
    properties: { [key: string]: string; } = {'name':'value'}
    /* We will omit listId since you use a fixed a test list id in this project */
    geocode: IGeocode = new Geocode();
}