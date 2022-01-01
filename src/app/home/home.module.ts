import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { ListViewComponent } from './list-view/list-view.component';
import { PropertyViewComponent } from './property-view/property-view.component';

@NgModule({
  imports: [
    HomeRoutingModule,CommonModule, CoreModule, ReactiveComponentModule
  ],
  declarations: [HomeComponent, ListViewComponent,PropertyViewComponent]
})
export class HomeModule { }
