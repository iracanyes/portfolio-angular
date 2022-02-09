import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import { gsap, TweenLite } from "gsap";
@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChildren("buttonGroup")
  protected _buttonGroup!: ElementRef;



  constructor() { }

  ngOnInit(): void {
    /*
    this.buttonGroup.foreach( (row: ElementRef) => {
      this.activate(row);
      this.rotate(row, 4, 360);
    });
     */
  }

  private get buttonGroup(){
    return this._buttonGroup.nativeElement;
  }

  public rotate(el: ElementRef, duration: number, degree: number) {
    return gsap.to(el, {duration: duration, rotationX: degree});
  }

  public activate(el: ElementRef): TweenLite {
    return gsap.fromTo(el, 0.5, { className: "" }, { className: "active" });
  }

  public inactivate(el: ElementRef): TweenLite {
    return gsap.fromTo(el, 0.5, { className: "active" }, { className: "" });
  }

}
