import { IGeocode } from "../abstract/i-geocode.model";

export class Geocode implements IGeocode {
    Longitude: string = ''
    Latitude: string = ''
    Percision: string = ''
    IsValid: boolean = false
}