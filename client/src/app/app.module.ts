import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from './directives/directives.module';
import { RouterModule } from "@angular/router";
import { Environment } from "../environments/environment.prod";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
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
  providers: [
    {provide: 'ngCspNonce', useValue: Environment.CSP_NONCE_VALUE}
  ]
})
export class AppModule { }
