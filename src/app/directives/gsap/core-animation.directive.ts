/**
 * The goal of this directive is to define the standard methods and attributes for our future animation directives,
 * to prevent a lot of repeats and hard-to-mantain directives.
 */
import {Directive, ElementRef, EventEmitter, Input, Output, ViewContainerRef} from "@angular/core";
import { gsap, ScrollTrigger, TimelineMax } from "gsap/all";

@Directive({
  selector: "[coreAnimation]"
})
export class CoreAnimationDirective{
  @Input() duration = 1;
  @Input() delay = 0;

  /**
   * event emitter for the animation complete callback
   */
  @Output() complete: EventEmitter<null> = new EventEmitter();
  /**
   * event emitter for the animation reverseComplete callback
   */
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
  protected timeline: TimelineMax;


  constructor(protected el: ElementRef) {
    /** Handle animate-out event
     * animate-out event handler - handle the event on HTML element and call the method animateOut
     */
    this.el.nativeElement.addEventListener(
      'animate-out',
      ({detail}: {detail: any}) => {
        this.animateOut(detail.parentViewRef);
      }
    );

    gsap.registerPlugin(ScrollTrigger);

    // Config timeline
    this.timeline = new gsap.core.Timeline({
      //repeat: -1,
      onComplete: () => this.complete.emit(),
      onReverseComplete: () => this.reverseComplete.emit(),
      paused: true,
      reversed: true
    });
  }

  protected animateIn(){
    if(this.timeline.isActive()){
      this.timeline.kill();
    }

    this.timeline.play();
  }

  /**
   * this method play the animation of the directive, but reversed.
   * It kills the timeline if is running, and set a timeout to clear the parentViewRef,
   * according to the animation duration and delay.
   * @param parentViewRef
   * @protected
   */
  protected animateOut(parentViewRef: ViewContainerRef){
    if(this.timeline.isActive()){
      this.timeline.kill();
    }

    setTimeout(() => {
      this.timeline.timeScale(this.duration).delay(0).reverse();
      setTimeout(() => {
        if(parentViewRef){
          parentViewRef.clear();
        }
      }, this.duration * 1000);
    }, this.delay * 1000);
  }

}
