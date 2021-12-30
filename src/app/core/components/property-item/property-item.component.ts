import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProperty } from 'src/app/app-state/entity/abstract/i-property.model';
import { Property } from 'src/app/app-state/entity/concrete/property.model';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PropertyItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() property:IProperty = new Property()

}
