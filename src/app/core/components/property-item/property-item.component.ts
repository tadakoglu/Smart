import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/app-state/entity/property.model';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() property:Property = <Property>{}

}
