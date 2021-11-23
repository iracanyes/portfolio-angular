import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import {AppDevComponent} from "./app-dev/app-dev.component";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from './directives/directives.module';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppDevComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule,
    DirectivesModule,
    PortfolioModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
