import { Component, OnInit } from '@angular/core';
import { AddApartmentDialogComponent } from '../../add-apartment-dialog/add-apartment-dialog.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog() {
    this.dialog.open(AddApartmentDialogComponent,{
      width: '500px'
    });
  }

}
