import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { gsap } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GsapService } from "../../../service/GsapService";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChildren("wrapper")
  protected wrapper: QueryList<ElementRef> | undefined;
  @ViewChild("handler") handler: ElementRef| undefined;
  @ViewChild("barLength") barLength: ElementRef| undefined;
  tweenMax: any;
  maxScroll: any;
  trigger: any;


  constructor(
    private _gsap: GsapService,
    private bar: ElementRef
  ) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


  }

  ngOnInit(): void {
    if(this.wrapper){
      // Retrieve  HTML Collection items
      const wrapperItems = this.wrapper?.get(0)?.nativeElement;

      wrapperItems.children.map((el: HTMLElement, index: number) => {
        console.log("ngOnInit el" + index, el );
        const cardElement = el.children[0];
        console.log("ngOnInit cardElement" + index, cardElement);
        gsap.to(
          window,
          {
            //scrollTo: el.children[0],
            scrollTrigger: {
              trigger: cardElement,
              scrub: true,
              toggleActions: "restart none none none"
            },
            x: "+70%",
            //rotate: 360,
            duration: 10
          }
        );
      })


    }

  }

  see_more(itemIndex: number): void{

    if(this.wrapper){

      // Retrieve  HTML Collection items
      const wrapperItems = this.wrapper?.get(0)?.nativeElement;
      console.log("see_more this.wrapper?.get(0)?.nativeElement.children", wrapperItems.children);
      console.log("see_more this.wrapper?.get(0)?.nativeElement.children[1]", wrapperItems.children[1]);
      console.log("see_more this.wrapper?.get(0)?.nativeElement.children[1].children[0]", wrapperItems.children[1].children[0]);
      console.log("see_more this.wrapper?.get(0)?.nativeElement.children[1].children[0].children[0]", wrapperItems.children[1].children[0].children[0]);

      // div.item
      const itemEl = wrapperItems.children[itemIndex];
      // div.card reference
      const cardEl = itemEl.children[0];
      const matCardEl = cardEl.children[0];
      if(itemEl){

        gsap.to(window, {
          scrollTo: itemEl,
          duration: 5
        });


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
            duration: 10
          }
        );


      }
    }


  }

}
