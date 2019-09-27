import { Component, OnInit } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';

import { SELECT_ITEM_HEIGHT_EM } from '@angular/material';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {

  public apartmentAds: Subscription;
  public apartmentList: any;

  constructor(
    public data: AngularFireDatabase,
  ) { 
    this.apartmentAds = data.list('apartments').valueChanges().subscribe( data => { 
      this.apartmentList = data;
      localStorage.setItem('apartmentList', JSON.stringify(this.apartmentList));
    });

  }

  ngOnInit() {
    console.log(localStorage.getItem('apartmentList'));
  }

}
