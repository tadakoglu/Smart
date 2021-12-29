import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './app-state';
import { UnitEffects } from './app-state/effects/unit.effects';
import { UnitDetailEffects } from './app-state/effects/unitDetail.effects';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { CoreService } from './_services/core.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule, /* We'll use this module for common used components */
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UnitEffects, UnitDetailEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }


