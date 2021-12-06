import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './page/homepage/homepage.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { HeaderComponent } from './navigation/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DirectivesModule } from "../directives/directives.module";
import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { RouterModule } from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { AboutComponent } from './page/about/about.component';
import {MatCardModule} from "@angular/material/card";
import { SkillsComponent } from './page/skills/skills.component';
import {NgParticlesModule} from "ng-particles";
import { HomeCardComponent } from './component/home-card/home-card.component';
import { ProgressBarComponent } from './widget/progress-bar/progress-bar.component';
import { SkillsCardComponent } from './component/skills-card/skills-card.component';
import { WorkComponent } from './page/work/work.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatRippleModule} from "@angular/material/core";
import { WorkDialogComponent } from './component/work-dialog/work-dialog.component';
import { WorkDialogCardComponent } from './component/work-dialog-card/work-dialog-card.component';
import {MatDialogModule} from "@angular/material/dialog";


const matModules = [
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatStepperModule,
  MatToolbarModule,
  MatRippleModule,
  MatDialogModule
];



// @ts-ignore
@NgModule({
  declarations: [
    HomepageComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    HomeCardComponent,
    ProgressBarComponent,
    SkillsCardComponent,
    WorkComponent,
    WorkDialogComponent,
    WorkDialogCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgParticlesModule,
    ...matModules,
    DirectivesModule,
    PortfolioRoutingModule,
  ],
  exports: []
})
export class PortfolioModule{}
