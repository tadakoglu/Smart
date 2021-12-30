import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Record } from 'src/app/app-state/entity/list.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() records:Record[] = [];

  @Output() onClickRecord = new EventEmitter<Record>();


}
