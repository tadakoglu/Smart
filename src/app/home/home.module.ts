import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,CommonModule, CoreModule
  ],
  declarations: [HomeComponent, HomeDetailComponent]
})
export class HomeModule { }