import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './app-state';
import { ListEffects } from './app-state/effects/list.effects';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SmartTokenInterceptor } from './_infrastructure/smart_token_interceptor';
import { AuthDataService } from './_services/auth-data.service';
import { ListService } from './_services/list.service';
import { PropertyService } from './_services/property.service';
import { PropertyEffects } from './app-state/effects/property.effects';
import ListMockService from './_services/mocks/list-mock.service';
import PropertyMockService from './_services/mocks/property-mock.service';
import { MapService } from './_services/map.service';
import { MapComponent } from './core/components/map/map.component';
import { ListViewComponent } from './home/list-view/list-view.component';
import { PropertyViewComponent } from './home/property-view/property-view.component';

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
    EffectsModule.forRoot([ListEffects, PropertyEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    MapService,
    ListService,
    ListMockService,
    PropertyService,
    PropertyMockService,
    AuthDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SmartTokenInterceptor, /* We use Angular Interceptor to add tokens to request automatically */
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


