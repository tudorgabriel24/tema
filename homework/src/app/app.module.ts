import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddApartmentDialogComponent } from './add-apartment-dialog/add-apartment-dialog.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import {
  MatMenuModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { UploadListComponent } from './upload-list/upload-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddApartmentDialogComponent,
    routingComponents,
    UploadListComponent,
    ErrorComponent,
  ],
  entryComponents: [
    AddApartmentDialogComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    HttpClientModule,

    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [AngularFireStorageModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
