import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {
  gsap,
  Back,
  Power4,
  CSSPlugin,
  ScrollToPlugin,
  ScrollTrigger
} from "gsap/all";
import { GsapService } from "../../../service/GsapService";
import {faGraduationCap, faUniversity} from "@fortawesome/free-solid-svg-icons";
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


const icons = {
  graduation: faGraduationCap,
  university: faUniversity
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class SkillsComponent implements OnInit {
  @ViewChildren("wrapper")
  protected wrapper: QueryList<ElementRef> | undefined;
  @ViewChild("handler") handler: ElementRef| undefined;
  @ViewChild("barLength") barLength: ElementRef| undefined;

  icons = icons;


  constructor(
    private _gsap: GsapService,
    private bar: ElementRef
  ) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSPlugin);

  }

  ngOnInit(): void {

    // Retrieve  HTML Collection items
    const wrapperItems = gsap.utils.toArray("div.item");
    console.log("ngOnInit wrapperItems2", wrapperItems);
    wrapperItems && wrapperItems.map((el: any, i: number) => {
      const bg = el.children[0];
      const title = el.children[1];
      const cardElement = el.children[2];
      // Give the backgrounds some random images
      bg.style.background = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

      gsap.to(bg, {
        scrollTrigger: {
          trigger: bg,
          scrub: true,
          toggleActions: "restart none none none"
        },
        ease: Power4.easeOut,
        x: i % 2 === 0 ? "-40%" : "40%",
        opacity: 1,
        skewX: 10,
        duration: 10
      });



      // Set position for each title & card
      if(i % 2 === 0){
        gsap.fromTo(title,{right: "0rem", opacity: 0},{right: "10rem", opacity: 1, ease: Back.easeOut,duration: 10});
        gsap.fromTo(cardElement, {right: "0", opacity: 0},{right: "8rem", opacity: 1, ease: Back.easeOut,duration: 10});
      }else{
        gsap.fromTo(
          title,
          {left: 0, opacity: 0},
          {left: "9rem", opacity: 1, ease: Back.easeOut,duration: 10}
        );
        gsap.fromTo(
          cardElement,
          {left: 0, opacity: 0},
          {left: "6rem", opacity: 1, ease: Back.easeOut,duration: 10}
        );
      }



    });

  }

  see_more(itemIndex: number): void{

    if(this.wrapper){

      // Retrieve  HTML Collection items
      const wrapperItems = this.wrapper?.get(0)?.nativeElement;

      // div.item
      const itemEl = wrapperItems.children[itemIndex];
      // div.card reference
      const cardEl = itemEl.children[1];
      const matCardEl = cardEl.children[0];
      if(itemEl){

        gsap.to(window, {
          scrollTo: itemEl,
          duration: 5
        });


      }
    }


  }

}
