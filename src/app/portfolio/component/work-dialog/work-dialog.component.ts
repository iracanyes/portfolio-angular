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
      width: '400px',
      data: this.item.data,
    });

    dialogRef.afterClosed().subscribe(result => {
      // animation on close
    });
  }

}
