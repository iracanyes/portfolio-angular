import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { HeaderComponent } from './navigation/header/header.component';



@NgModule({
  declarations: [
    HomepageComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
