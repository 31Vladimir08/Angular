import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { Interceptor } from './shared/services/interceptor.service';
import { HeaderModule } from './shared/modules/header/header.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    HomeModule,
    HeaderModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
