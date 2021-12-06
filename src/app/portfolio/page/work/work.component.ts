import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'portfolio-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @ViewChildren("wrapper") private wrapper: QueryList<ElementRef> | undefined;
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.animation();
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
        backgroundPosition: `50% ${innerHeight /2}px`,
        ease: "none", // Don't apply any easing function
        scrollTrigger: {
          trigger: section,
          scrub: true,
          toggleActions: "restart none none none"
        }
      });

    });
  }

  sliderAnimation(itemIndex: number): void{
    if(this.wrapper){

      // Retrieve  HTML Collection items
      const wrapperItems = this.wrapper?.get(0)?.nativeElement;

      // div.item
      const section = wrapperItems.children[itemIndex];
      // div.card reference
      const cardEl = section.children[2];
      //const matCardEl = cardEl.children[0];
      if(section){
        // Scroll to next section
        gsap.to(window, {
          scrollTo: section,
          duration: 3
        });

        //
        gsap.to(
          cardEl,
          {
            //scrollTo: elContainer,
            scrollTrigger: {
              trigger: cardEl,
              scrub: true,
              toggleActions: "restart none none none"
            },
            x: "+70%",
            //rotate: 360,
            duration: 5
          }
        );


      }
    }
  }

}
