import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from "./gsap/fade-in.directive";
import {CoreAnimationDirective} from "./gsap/core-animation.directive";
import {NgifAnimatedDirective} from "./structural/ngif-animated.directive";
import {ScrollToDirective} from "./gsap/scroll-to.directive";



@NgModule({
  declarations: [
    CoreAnimationDirective,
    FadeInDirective,
    NgifAnimatedDirective,
    ScrollToDirective
  ],
  exports: [
    FadeInDirective,
    ScrollToDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
