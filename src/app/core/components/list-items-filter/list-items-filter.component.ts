import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-items-filter',
  templateUrl: './list-items-filter.component.html',
  styleUrls: ['./list-items-filter.component.css']
})
export class ListItemsFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onMaxPriceFilterChange = new EventEmitter<number>();
  @Output() onBedroomFilterChange = new EventEmitter<number[]>();
  @Output() onIsFavoriteFilterChange = new EventEmitter<boolean>();


}
