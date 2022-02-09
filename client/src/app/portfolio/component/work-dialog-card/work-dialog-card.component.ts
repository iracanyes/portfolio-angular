import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  title: string;
  images: DialogDataImage[],
  content: string;
  repository: string;
}

export interface DialogDataImage{
  src: string;
  title: string;
  alt: string;
}

@Component({
  selector: 'app-work-dialog-card',
  templateUrl: './work-dialog-card.component.html',
  styleUrls: ['./work-dialog-card.component.scss']
})
export class WorkDialogCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WorkDialogCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {

  }

}
