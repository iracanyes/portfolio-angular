import { Component, OnInit } from '@angular/core';
import { workMobileData } from "../../../../data/work-data";

@Component({
  selector: 'prtf-work-expansion-panel',
  templateUrl: './work-expansion-panel.component.html',
  styleUrls: ['./work-expansion-panel.component.scss']
})
export class WorkExpansionPanelComponent implements OnInit {
  step = 0;
  workMobileData = workMobileData;

  constructor() { }

  ngOnInit(): void{
  }

  setStep(index: number): void{
    this.step = index;
  }

  nextStep(index: number): void{
    console.log("step before increment : ", this.step);
    console.log("index before increment : ", index);
    if(index === workMobileData.length - 1){
      this.step = 0;
    }else{
      this.step++;
    }
    console.log("step after increment : ", this.step);
    console.log("index after increment : ", index);

  }

  prevStep(): void{
    this.step--;
  }

}
