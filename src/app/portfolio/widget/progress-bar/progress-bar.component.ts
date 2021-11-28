import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  color:string = "";
  @Input() progress: number = 0;
  @Input() total: number = 0;

  constructor() { }

  ngOnInit(): void {
    // if no progress data given, set to 0
    if(!this.progress){
      this.progress = 0;
    }

    // if no total given, set to 100
    if(this.total === 0){
      this.total = this.progress;
    } else if(!this.total){
      this.total = 100;
    }

    // if progress > total , set the 2 properties to 100
    if(this.progress > this.total){
      this.progress = 100;
      this.total = 100;
    }

    this.progress = (this.progress / this.total) * 100;

    switch(true){
      case this.progress < 35:
        this.color = "red";
        break;
      case this.progress < 55:
        this.color = "orange";
        break;
      case this.progress < 75:
        this.color = "yellow";
        break;
      case this.progress < 100:
        this.color = "green";
        break;
      default:
        this.color = "blue";
        break;
    }
  }

}
