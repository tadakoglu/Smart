import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { IMapPoint } from 'src/app/app-state/entity/abstract/i-map-point.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() mapPoints: IMapPoint[] = []; /* These includes PropertyIds and Geocodes */

  @Output() onClickRecord = new EventEmitter<IRecord>();


}
