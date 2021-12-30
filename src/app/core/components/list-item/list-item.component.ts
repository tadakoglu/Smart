import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { Record } from 'src/app/app-state/entity/concrete/list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() record:IRecord = new Record()


}
