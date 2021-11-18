import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import {RouterModule} from "@angular/router";
import {AppDevComponent} from "./app-dev/app-dev.component";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppDevComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortfolioModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
