import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Upload } from "../../interfaces/upload/upload";

import { AngularFireStorage} from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import * as _ from "lodash";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';


@Component({
  selector: "app-add-apartment-dialog",
  templateUrl: "./add-apartment-dialog.component.html",
  styleUrls: ["./add-apartment-dialog.component.scss"],
  providers: [DatePipe]
})
export class AddApartmentDialogComponent implements OnInit {
  public currentDate = new Date();
  public currentUpload: Upload;
  public selectedFiles: File[] = [];
  public downloadURLs: string[] = [];
  public selectedFilesName: string[] = [];
  public form : FormGroup;
  public uploadedFileCounter: number;


  public address: string = '';
  public addedDate: string = this.datePipe.transform(this.currentDate, "dd/MM/yyyy");
  public description: string = '';
  public phone: string = '';
  public photos: FileList[] = [];
  public price: number = 0;
  public roomsNumber: number = 0;
  public title: string = '';

  constructor(
    private datePipe: DatePipe,
    private afStorage: AngularFireStorage,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      addedDate: this.datePipe.transform(new Date(), 'dd/MM/yyyy'),
      address: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      phone: ['',[Validators.required, Validators.pattern(`^[0-9\-\+]{9,15}$`)]],
      photos: [],
      price: [0, [Validators.required, Validators.min(0)]],
      roomsNo: [0, [Validators.required, Validators.min(1)]],
      title: ['', [Validators.required, Validators.maxLength(150)]]
    });
  }


  ngOnInit() {
    this.uploadedFileCounter = 0;
  }

  public onFileUpload(event: any) {

    const file: File = event.target.files[0];
    this.selectedFiles.push(event.target.files[0]);
    this.selectedFilesName.push(file.name);
  }

  private pushUpload(): void {
    this.form.value.photos = [null];
    for( let index = 0; index < this.downloadURLs.length; index++)
    {
      this.form.value.photos.push(this.downloadURLs[index]);
    }
      firebase.database().ref('/apartments').push(this.form.value);
  }

  public uploadFiles() {
      this.selectedFiles.forEach((file: File) => {
        const id = Math.random().toString(36).substring(2);
        const fileRef = this.afStorage.ref(`/photos/${id}`);
        this.afStorage.upload(`/photos/${id}`,file).snapshotChanges().pipe(
          finalize( () => {
            fileRef.getDownloadURL().subscribe( (url) => {
              this.downloadURLs.push(url);
              this.uploadedFileCounter++;
              console.log(this.downloadURLs);
              if(this.uploadedFileCounter === this.selectedFiles.length) {
                this.pushUpload();
              }
            });
          })
        ).subscribe();
      })

    }
  }
