import { IGeojson } from "./i-geo-json.model";

export interface IData {
    type: string
    features: IGeojson[]
}

export interface IGeolibreSource {
    type: string 
    data: IData
}