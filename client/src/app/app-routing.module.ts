import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule} from "@angular/router";
import { appRoutes } from "../environments/routes";
import {Environment} from "../environments/environment.local";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
