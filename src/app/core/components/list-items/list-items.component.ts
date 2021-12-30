import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecord } from 'src/app/app-state/entity/abstract/i-list.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() records:IRecord[] = [];

  @Output() onClickRecord = new EventEmitter<IRecord>();

  clickOnRecord(record: IRecord){
    this.onClickRecord.emit(record);
  }


}
