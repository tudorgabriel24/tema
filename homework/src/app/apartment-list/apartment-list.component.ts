import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Apartment } from '../../models/apartment.model';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {

  public apartmentAds: Observable<any>;
  public title: string;
  public description: string;

  constructor(
    public data: AngularFireDatabase,
  ) { 
    this.apartmentAds = data.list('apartments').valueChanges();
  }

  ngOnInit() {
  }

}
