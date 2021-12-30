import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { PropertyItemComponent } from './components/property-item/property-item.component';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListItemsFilterComponent } from './components/list-items-filter/list-items-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListItemsComponent, ListItemsFilterComponent, ListItemComponent, PropertyItemComponent, MapComponent, FooterComponent],
  exports: [ListItemsComponent, ListItemsFilterComponent, ListItemComponent, PropertyItemComponent, MapComponent, FooterComponent]
})
export class CoreModule { }
