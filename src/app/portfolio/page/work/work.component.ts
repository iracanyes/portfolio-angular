import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  workMobileData,
  workFrontendData,
  workBackendData
} from "../../../../data/work-data";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'portfolio-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  @ViewChildren("wrapper") private wrapper: QueryList<ElementRef> | undefined;
  @ViewChild("stepper") private stepper: MatStepper| undefined;
  workMobileData = workMobileData;
  workFrontendData = workFrontendData;
  workBackendData = workBackendData;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.animation();


  }

  ngAfterViewInit() {
    if(this.stepper) this.stepper.selectedIndex = 3;
  }

  see_more(itemIndex: number): void{
    this.sliderAnimation(itemIndex);
  }

  animation(): void{
    gsap.utils.toArray("section").forEach((section: any, i: number) => {
      // Set the bg variable for the section
      section.bg = section.querySelector(".bg");

      // Give the backgrounds some random images
      section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
      // Set initial position
      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

      // Parallax effect for each section
      gsap.to(section.bg, {
        //backgroundPosition: `50% ${innerHeight /2}px`,
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none", // Don't apply any easing function
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: "restart none none none"
        }
      });



      // fade in animation
      const card = section.querySelector(".card");
      console.log("onInit card", card);
      gsap.fromTo(card, {
        opacity: 0.0,
      }, {
        opacity: 1.0,
        ease: "none",
        //delay: 1,
        duration: 2,
        scrollTrigger: {
          trigger: section,
          toggleActions: "restart pause restart none"
        }
      });

    });
  }

  sliderAnimation(itemIndex: number): void{
    if(this.wrapper){

      // Retrieve  HTML Collection items
      const wrapperItems = this.wrapper?.get(0)?.nativeElement;


      gsap.utils.toArray("section").forEach((section: any, index, sections) => {
        if(itemIndex === index){
          const selected= sections[itemIndex] as Element;
          const cardEl = section.children[2];
          const button0 = cardEl.children[0];
          if(section){
            /* Scroll to next section
            gsap.to(window, {
              scrollTo: section,
              duration: 2
            });
            */

            gsap.to(window, { scrollTo: selected, duration: 2, xPercent: 0 });



            /* Card animation
            gsap.fromTo(
              cardEl,
              {
                opacity: 1
              },
              {
                scrollTrigger: {
                  trigger: cardEl,
                  toggleActions: "restart pause resume none"
                },
                //x: "+20%",
                opacity: 0,
                delay: 6,
                duration: 2
                //rotate: 360,
              }
            );

             */


          }
        }
      });

    }
  }

}
