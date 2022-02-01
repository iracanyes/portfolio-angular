import {Component, OnInit, Inject, Input} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {WorkDialogCardComponent} from "../work-dialog-card/work-dialog-card.component";

@Component({
  selector: 'portfolio-work-dialog',
  templateUrl: './work-dialog.component.html',
  styleUrls: ['./work-dialog.component.scss']
})
export class WorkDialogComponent implements OnInit {
  @Input() public item: any;
  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  openDialog(): void{
    const dialogRef = this.dialog.open(WorkDialogCardComponent, {
      width: '600px',
      height: '50vh',
      position: {
        top: "10%"
      },
      data: this.item.data,

    });
    // update position of the modal after opening
    //dialogRef.updatePosition({ top: '200px' });

    // Remove the scrollblock added by mat-dialog as it cause the background added programmatically to go top
    document.documentElement.classList.remove("cdk-global-scrollblock");

    //

    dialogRef.afterClosed().subscribe(result => {
      // animation on close
    });
  }

}
