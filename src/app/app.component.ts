import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './app-state';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { MapService } from './_services/map.service';
import { IMapPoint } from './app-state/entity/abstract/i-map-point.model';
import { MapPoint } from './app-state/entity/concrete/map-point.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

  /* Since we use immutable objects through NGRX state manager 
  we can optimize app speed with OnPush not to check for changes anytime */
  /* Reference : https://github.com/tadakoglu/change-detection-tree */

})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private mapService: MapService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {

  }
  title = 'Smart-Tayfun-Adakoğlu';

  showTayfun() {
    let loc: IMapPoint = new MapPoint()
    loc.geocode.Longitude = '28.979530'
    loc.geocode.Latitude = ' 41.015137'
    this.mapService.flyToNotifier.next(loc)
  }
}
