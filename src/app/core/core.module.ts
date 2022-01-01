import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListItemsFilterComponent } from './components/list-items-filter/list-items-filter.component';
import { AgentInfoComponent } from './components/agent-info/agent-info.component';
import { ListComponent } from './components/list/list.component';
import { PropertyComponent } from './components/property/property.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, PropertyComponent, AgentInfoComponent, ListItemsComponent, ListItemsFilterComponent, ListItemComponent, MapComponent, FooterComponent],
  exports: [ListComponent, PropertyComponent, AgentInfoComponent, ListItemsComponent, ListItemsFilterComponent, ListItemComponent, MapComponent, FooterComponent]
})
export class CoreModule { }
