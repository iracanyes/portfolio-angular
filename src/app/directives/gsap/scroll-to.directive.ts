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
  selector: "[ScrollToAnimation]"
})
export class ScrollToDirective extends CoreAnimationDirective implements OnInit{
  @Input() route: any = undefined;
  @Input() position: {x: number, y:number}|undefined = undefined;

  constructor(
    protected override el: ElementRef
  ) {
    super(el);
  }

  ngOnInit() {
    this.animateIn();
  }

  protected override animateIn() {
    console.log("animateIn() route", this.route);
    this.timeline.to(
      this.route.nativeElement,
      {
        scrollTrigger: {
          trigger: this.route.nativeElement,
          toggleActions: "restart none none none"
        },
        x: this.position ? this.position.x : undefined,
        rotate: 360,
        duration: this.duration
      },
    );
    super.animateIn();
  }
}
