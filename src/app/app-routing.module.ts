import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule} from "@angular/router";
import {AppDevComponent} from "./app-dev/app-dev.component";
import {HomepageComponent} from "./portfolio/homepage/homepage.component";
import {PageNotFoundComponent} from "./portfolio/page/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dev', component: AppDevComponent },
  /*
  {
    path: 'tour-of-heroes',
    loadChildren: () => import('./tour-of-heroes/tour-of-heroes.module')
      .then(m => m.TourOfHeroesModule)
  },
   */
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
