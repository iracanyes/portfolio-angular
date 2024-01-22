import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { particlesOpt } from "../../../../assets/particles";

import {NgParticlesService} from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import {
  Container,
  Main,
} from "@tsparticles/engine";

@Component({
  selector: 'portfolio-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  particlesOpts = particlesOpt;

  constructor(
    protected el: ElementRef,
    private readonly ngParticlesService: NgParticlesService
  ) { }

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);

      await loadSlim(engine);
    })
  }

  particlesLoaded(container: Container): void
  {
    console.log("ngParticles loaded", container);
  }





}
