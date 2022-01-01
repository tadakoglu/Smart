import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as GeoJSON from 'geojson';
import * as maplibregl from 'maplibre-gl';
import { Map, Marker, NavigationControl } from 'maplibre-gl';
import { concatMap, filter, startWith, Subject, Subscription, takeUntil } from 'rxjs';
import { IGeojson } from 'src/app/app-state/entity/abstract/i-geo-json.model';
import { IGeolibreSource } from 'src/app/app-state/entity/abstract/i-geo-libre-source.model';
import { IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { IMapPoint } from 'src/app/app-state/entity/abstract/i-map-point.model';
import { Geojson } from 'src/app/app-state/entity/concrete/geo-json.model';
import { GeolibreSource } from 'src/app/app-state/entity/concrete/geo-libre-soure.model';
import { MAPTILER_API_KEY, MAPTILER_MAP_DEFAULT_MARKER, MAPTILER_MAP_STYLE } from 'src/app/_infrastructure/contstants';
import { MapService } from 'src/app/_services/map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  map!: Map;

  constructor(private mapService: MapService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    const api_key = MAPTILER_API_KEY
    const map_style = MAPTILER_MAP_STYLE;
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${map_style}?key=${api_key}`,
      interactive: true,
    });
    this.map.addControl(new NavigationControl(), 'top-right');

    this.map.on('load', (map) => {
      map.target.loadImage(MAPTILER_MAP_DEFAULT_MARKER, (error: any, image: any) => {
        if (error) throw error;
        map.target.addImage('smart-marker', image);
      })

      map.target.addSource("points", this.getSourceJSONFrom(this.mapPoints));

      map.target.addLayer({
        "id": "symbols",
        "type": "symbol",
        "source": "points",
        "layout": {
          "icon-image": "smart-marker"
        }
      });

      map.target.on('click', 'symbols', (e: any) => {
        this.onClickRecord.emit(e.features[0].properties.propertyId)
      });

      this.mapService.boundsToNotifier.pipe(takeUntil(this.destroy$), startWith(this.mapPoints)).subscribe(() => {
        this.fitBoundsTo(this.map, this.mapPoints);
      })

      this.mapService.flyToNotifier.pipe(takeUntil(this.destroy$)).subscribe(val => {
        this.flyTo(this.map, val);
      })
    });

  }
  ngOnDestroy(): void {
    this.map?.remove();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  @Input()
  public mapPoints: IMapPoint[] = []; /* These includes PropertyIds and Geocodes */

  @Output()
  onClickRecord = new EventEmitter<number>();



  // Note that initializer design patterns can be used here but because values are pretty long, I won't use it here to make the code more readible
  getSourceJSONFrom(mapPoints: IMapPoint[]): any {
    let geojsonArray: IGeojson[] = mapPoints.map(point => {
      let geojson: IGeojson = new Geojson();
      geojson.properties = point.properties
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
  fitBoundsTo(map: Map, mapPoints: IMapPoint[]): any {
    let lots: number[] = mapPoints.map(p => parseFloat(p.geocode.Longitude))
    let lats: number[] = mapPoints.map(p => parseFloat(p.geocode.Latitude))

    let longtitude = { min: Math.min(...lots), max: Math.max(...lots) }
    let latitude = { min: Math.min(...lats), max: Math.max(...lats) }

    map.fitBounds([
      [longtitude.min, latitude.min],
      [longtitude.max, latitude.max],
    ]);

  }
  flyTo(map: Map, mapPoint: IMapPoint): any {
    let val: maplibregl.LngLat = new maplibregl.LngLat(parseFloat(mapPoint.geocode.Longitude), parseFloat(mapPoint.geocode.Latitude));
    map.flyTo({
      center: val,
      duration: 1250,
      zoom: 15
    });

  }



}
