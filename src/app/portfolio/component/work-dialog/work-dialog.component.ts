import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {WorkDialogCardComponent} from "../work-dialog-card/work-dialog-card.component";

@Component({
  selector: 'portfolio-work-dialog',
  templateUrl: './work-dialog.component.html',
  styleUrls: ['./work-dialog.component.scss']
})
export class WorkDialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(WorkDialogCardComponent, {
      width: '400px',
      data: {
        title: "Natflix like app",
        images: [
          {
            src: "https://picsum.photos/400/400?random=1",
            title: "Netflix like homepage",
            alt: "Netflix like homepage"
          },
          {
            src: "https://picsum.photos/400/400?random=2",
            title: "Netflix like homepage",
            alt: "Netflix like homepage"
          },
          {
            src: "https://picsum.photos/400/400?random=2",
            title: "Netflix like homepage",
            alt: "Netflix like homepage"
          },

        ],
        content: "I wanted to learn streaming on mobile app as I consider it a must-know in the development of mobile application cross-platform for now and the future."
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // animation on close
    });
  }

}
