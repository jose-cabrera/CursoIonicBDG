import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  LatLng,
  CameraPosition,
  GoogleMap
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl:NavController,
              public geolocation:Geolocation) {

  }

  onMapClick() {

  }

  camera:CameraPosition;
  position:LatLng;

  onMapReady(map:GoogleMap) {
    this.geolocation.getCurrentPosition().then(res => {
      console.log("mi posicion" + JSON.stringify(res.coords));

      console.log("Consumir el servicio");
      this.position = new LatLng( res.coords.latitude,  res.coords.longitude);
      this.camera = {
        target: this.position,
        zoom: 15,
        tilt: 30
      };
    });
  }

}
