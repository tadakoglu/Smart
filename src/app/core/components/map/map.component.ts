import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as GeoJSON from 'geojson';
import * as maplibregl from 'maplibre-gl';
import { Map, Marker, NavigationControl } from 'maplibre-gl';
import { IGeojson } from 'src/app/app-state/entity/abstract/i-geo-json.model';
import { IGeolibreSource } from 'src/app/app-state/entity/abstract/i-geo-libre-source.model';
import { IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { IMapPoint } from 'src/app/app-state/entity/abstract/i-map-point.model';
import { Geojson } from 'src/app/app-state/entity/concrete/geo-json.model';
import { GeolibreSource } from 'src/app/app-state/entity/concrete/geo-libre-soure.model';
import { MAPTILER_API_KEY, MAPTILER_MAP_STYLE } from 'src/app/_infrastructure/contstants';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  map: Map | undefined;
  constructor() { }


  ngOnInit() { }

  ngAfterViewInit() {
    // const initialState = { lng: 0, lat: 0, zoom: 15 };
    const api_key = MAPTILER_API_KEY
    const map_style = MAPTILER_MAP_STYLE;
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${map_style}?key=${api_key}`,
      // center: [initialState.lng, initialState.lat],
      // zoom: initialState.zoom,
      interactive: true
    });

    this.map.addControl(new NavigationControl(), 'top-right');

    this.map.on('load', (map) => {
      map.target.loadImage('/assets/markers/marker-pink.png', (error: any, image: any) => {
        if (error) throw error;
        map.target.addImage('custom-marker', image);
      })
      map.target.addSource("points", this.createSourceJSON(this.mapPoints));

      map.target.addLayer({
        "id": "symbols",
        "type": "symbol",
        "source": "points",
        "layout": {
          "icon-image": "custom-marker"
        }
      });
      this.fitBounds(map.target,this.mapPoints);
    });

    this.map.on('click', 'symbols', (e: any) => {
      e.target.flyTo({
        center: e.features[0].geometry.coordinates,
        duration: 1250,
        zoom: 15
      });

    });



  }
  ngOnDestroy(): void {
    this.map?.remove();
  }



  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  @Input() mapPoints: IMapPoint[] = []; /* These includes PropertyIds and Geocodes */

  // Note that initializer design patterns can be used here but because values are pretty long, I won't use it here to make the code more readible
  createSourceJSON(mapPoints: IMapPoint[]): any {

    let geojsonArray: IGeojson[] = mapPoints.map(point => {
      let geojson: IGeojson = new Geojson();
      geojson.properties = {}
      geojson.type = 'Feature'
      geojson.geometry.coordinates = [parseFloat(point.geocode.Longitude), parseFloat(point.geocode.Latitude)]
      geojson.geometry.type = 'Point'
      return geojson;
    })
    let source: IGeolibreSource = new GeolibreSource();
    source.type = 'geojson'
    source.data.features = geojsonArray;

    return source
  }

  fitBounds(map: Map, mapPoints: IMapPoint[]): any {
    let lots = mapPoints.map(p => parseFloat(p.geocode.Longitude))
    let lats = mapPoints.map(p => parseFloat(p.geocode.Latitude))

    let longtitude = { min: Math.min(...lots), max: Math.max(...lots) }
    let latitude = { min: Math.min(...lats), max: Math.max(...lats) }

    map.fitBounds([
      [longtitude.min, latitude.min],
      [longtitude.max, latitude.max],
    ]);

  }
  @Output() onClickRecord = new EventEmitter<IRecord>();


}
