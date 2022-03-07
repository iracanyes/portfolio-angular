import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import {ContactComponent} from "./contact.component";

const contactRoutes:Routes = [
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(contactRoutes, { enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}
