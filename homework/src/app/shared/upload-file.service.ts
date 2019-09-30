import { Injectable } from "@angular/core"; 
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Upload } from '../../interfaces/upload/upload';

@Injectable({
  providedIn: "root"
})
export class UploadFileService {
  constructor(
    private db: AngularFireDatabase
  ) {}

  private basePath: string = '/apartments/photos';
  private uploadTask: firebase.storage.UploadTask;

  public pushUpload(upload: Upload): void {
    let storageRef = firebase.storage().ref();
    let success = false;
  }
}
