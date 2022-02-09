import {Routes} from "@angular/router";
import {HomepageComponent} from "../app/portfolio/page/homepage/homepage.component";
import {AppDevComponent} from "../app/app-dev/app-dev.component";
import {PageNotFoundComponent} from "../app/portfolio/page/page-not-found/page-not-found.component";
import {SkillsComponent} from "../app/portfolio/page/skills/skills.component";
import {AboutComponent} from "../app/portfolio/page/about/about.component";
import {WorkComponent} from "../app/portfolio/page/work/work.component";
import {ContactComponent} from "../app/portfolio/page/contact/contact.component";

export const appRoutes: Routes  = [
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

export const portfolioRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work', component: WorkComponent },
  { path: "contact", component: ContactComponent }
];
