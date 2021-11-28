import {ElementRef, EventEmitter, Injectable, Output} from "@angular/core";
import { gsap, Power2, Elastic } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface IFadeFromOptions {
  duration: number;
  opacity: number;
  ease: string;
  delay: number;
};

export interface IScrollToOptions{
  duration: number;
}

export interface IScrollTriggerOptions{
  duration: number;
  trigger?: string | undefined;
  position?: { x: number|undefined, y: number|undefined} | undefined;
}

@Injectable({
  providedIn: "root"
})
export class GsapService{

  public constructor() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  }

  public fadeFrom(el: ElementRef, options: IFadeFromOptions ){
    gsap.to(el, {
      duration: options.duration ? options.duration : undefined,
      opacity: options.opacity ? options.opacity : undefined,
      ease: Power2.easeIn,
      delay: options.delay ? options.delay : undefined,
    });
  }

  public scrollTo(el: HTMLElement, options: IScrollToOptions): void{
    gsap.to(window, {
      scrollTo: el,
      duration: options.duration ? options.duration : 10
    });
  }

  public scrollTrigger(el: ElementRef, options: IScrollTriggerOptions): void{
    gsap.to(el, {
      scrollTrigger: {
        trigger: options.trigger,
        toggleActions: "restart none none none"
      },
      x: options.position?.x ? options.position.x : undefined,
      y: options.position?.y ? options.position.y : undefined,
      rotate: 360,
      duration: options.duration
    });
  }
}
