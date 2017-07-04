import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { CompOneComponent } from './components/compOne/compOne.component';
import { CompTwoComponent } from './components/compTwo/compTwo.component';
import { DefaultComponent } from './components/default/default.component';


@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
