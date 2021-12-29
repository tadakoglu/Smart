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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { CoreService } from './_services/core.service';
import { SmartTokenInterceptor } from './_infrastructure/smart_token_interceptor';
import { AuthDataService } from './_services/auth-data.service';

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
  providers: [
    CoreService,
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


  