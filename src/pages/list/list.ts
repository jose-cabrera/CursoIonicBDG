import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {AndroidFingerprintAuth, AFAAuthOptions} from '@ionic-native/android-fingerprint-auth';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              private camera:Camera,
              private androidFingerprintAuth:AndroidFingerprintAuth) {

  }

  options:CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  base64Image:string;

  openCamera() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  token:string;

  checkFingerPrint() {
    this.androidFingerprintAuth.isAvailable()
      .then((result)=> {
        if(result.isAvailable){
          // it is available

          this.androidFingerprintAuth.encrypt({ clientId: "myAppName", username: "myUsername", password: "myPassword" })
            .then(result => {
              if (result.withFingerprint) {
                console.log("Successfully encrypted credentials.");
                console.log("Encrypted credentials: " + result.token);
                this.token = result.token;
              } else if (result.withBackup) {
                console.log('Successfully authenticated with backup password!');
              } else console.log('Didn\'t authenticate!');
            })
            .catch(error => {
              if (error === "Cancelled") {
                console.log("Fingerprint authentication cancelled");
              } else console.error(error)
            });

        } else {
          // fingerprint auth isn't available
        }
      })
      .catch(error => console.error(error));
  }

  password:string;

  checkFingerPrintDecrypt(){
    this.androidFingerprintAuth.isAvailable()
      .then((result)=> {
        if(result.isAvailable){
          // it is available

          var decryptConfig = {
            clientId: "myAppName",
            username: "currentUser",
            token: this.token
          };

          this.androidFingerprintAuth.decrypt(decryptConfig)
            .then(result => {
              if (result.withFingerprint) {
                console.log("Successfully encrypted credentials.");
                console.log("Encrypted credentials: " + result.password);
                this.password = result.password;
              } else if (result.withBackup) {
                console.log('Successfully authenticated with backup password!');
                this.password = result.password;
              } else console.log('Didn\'t authenticate!');
            })
            .catch(error => {
              if (error === "Cancelled") {
                console.log("Fingerprint authentication cancelled");
              } else console.error(error)
            });

        } else {
          // fingerprint auth isn't available
        }
      })
      .catch(error => console.error(error));
  }
}
