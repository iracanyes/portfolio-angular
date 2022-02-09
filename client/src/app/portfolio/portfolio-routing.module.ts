import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { portfolioRoutes } from "../../environments/routes";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(portfolioRoutes, { enableTracing: true })
  ],
  exports: [
    RouterModule,
  ]
})
export class PortfolioRoutingModule{}
