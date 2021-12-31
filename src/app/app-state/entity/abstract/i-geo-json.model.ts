export interface IGeometry {
    type: string
    coordinates: number[]
}

export interface IGeojson {
    type: string 
    geometry: IGeometry
    properties: {[key: string]: string}
}