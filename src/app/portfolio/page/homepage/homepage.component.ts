import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { particlesOpt } from "../../../../assets/particles";
import {Container, Main} from "tsparticles";

@Component({
  selector: 'portfolio-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  particlesOpt = particlesOpt;

  constructor(
    protected el: ElementRef
  ) { }

  ngOnInit(): void {
  }

  particlesLoaded(container: Container){
    console.log("ngParticles loaded", container);
  }

  particlesInit(main: Main): void{
    console.log("particlesInit", main);
    /* Starting from 1.19.0 you can add custom presets or shape here,
     * using the current tsParticles instance (main)
     */
  }



}
