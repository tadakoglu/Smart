import { IGeojson } from "../abstract/i-geo-json.model";
import { IData } from "../abstract/i-geo-libre-source.model";
import { Geojson } from "../concrete/geo-json.model";

export class Data {
    type: string = 'FeatureCollection'
    features: IGeojson[] = []
}

export class GeolibreSource {
    type: string  = 'geojson'
    data: IData = new Data()
}