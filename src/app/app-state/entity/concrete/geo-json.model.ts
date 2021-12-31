import { IGeojson, IGeometry } from "../abstract/i-geo-json.model"

export class Geometry implements IGeometry {
    type: string = 'Point'
    coordinates: number[] = []
}

export class Geojson implements IGeojson {
    type: string = 'Feature'
    geometry: Geometry = new Geometry()
    properties: {[key: string]: string} = {'name':'value'}
}