import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule} from "@angular/router";
import { appRoutes } from "../environments/routes";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
