import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Record } from 'src/app/app-state/entity/list.model';
import { MapPoint } from 'src/app/app-state/entity/mapPoint.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() mapPoints: MapPoint[] = []; /* These includes PropertyIds and Geocodes */

  @Output() onClickRecord = new EventEmitter<Record>();


}
