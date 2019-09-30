import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {

  public apartmentAds: Subscription;
  public apart: Subscription;
  public apartmentList: any[] = [];
  public displayedPhotos: string[] = [];

  constructor(
    public data: AngularFireDatabase,
  ) { }

  ngOnInit() {

    this.apartmentAds = this.data.list('apartments').valueChanges().subscribe( data => { 
      this.apartmentList = data;
      this.apartmentList.forEach(apartment => {
        this.displayedPhotos.push(apartment.photos[1]);
      });
      localStorage.setItem('apartmentList', JSON.stringify(this.apartmentList));
    });
  }

}
