/**
 * https://dev.to/nicolalc/gsap-animations-in-angular-getting-started-15bg
 */
import {
  Directive,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { gsap } from "gsap";
import { CoreAnimationDirective } from "./core-animation.directive";

@Directive({
  selector: "[fadeInAnimation]"
})
export class FadeInDirective extends CoreAnimationDirective implements OnInit{

  constructor(
    protected override el: ElementRef
  ) {
    super(el);
  }

  ngOnInit() {
    this.animateIn();
  }

  protected override animateIn() {
    this.timeline.from(
      this.el.nativeElement,
      this.duration,
      {
        opacity: "0",
        ease: "Expo.easeInOut"
      },
      this.delay
    );
    super.animateIn();
  }
}
