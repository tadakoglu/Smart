import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';
import { IAgentInfo, IListFilter, IRecord } from 'src/app/app-state/entity/abstract/i-list.model';
import { AgentInfo, ListFilter } from 'src/app/app-state/entity/concrete/list.model';
import { ListState } from 'src/app/app-state/reducers/list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public list!: ListState

  // @Input()
  // public agentInfo: IAgentInfo = new AgentInfo();
  // @Input()
  // public filter: IListFilter = new ListFilter()
  // @Input()
  // public records: IRecord[] = []


  setPriceFilter($eventArgs: any) {
    let maxPrice: number = $eventArgs;
    let filterClone = _.cloneDeep(this.list.filter)
    filterClone.maxPrice = maxPrice;
    this.onFilterEvent.emit(filterClone)
  }
  setRoomsFilter($eventArgs: any) {
    let bedrooms: number[] = $eventArgs
    let filterClone = _.cloneDeep(this.list.filter)
    filterClone.roomCounts = _.cloneDeep(bedrooms);
    this.onFilterEvent.emit(filterClone)

  }
  setFavoriteFilter($eventArgs: any) {
    let favorite: boolean = $eventArgs;
    let filterClone = _.cloneDeep(this.list.filter)
    filterClone.isFavorite = favorite;
    this.onFilterEvent.emit(filterClone)

  }

  @Output() onFilterEvent = new EventEmitter<IListFilter>();
  @Output() onClickRecord = new EventEmitter<IRecord>();

  clickRecord($eventArgs: any) {
    let record: IRecord = $eventArgs;
    this.onClickRecord.emit(record);
  }

}
