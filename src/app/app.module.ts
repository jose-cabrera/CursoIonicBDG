import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {OneSignal} from '@ionic-native/onesignal';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import {AndroidFingerprintAuth, AFAAuthOptions} from '@ionic-native/android-fingerprint-auth';

import {
  GoogleMaps
} from '@ionic-native/google-maps';

import {GoogleMapComponent} from '../components/google-map';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    Geolocation,
    GoogleMaps,
    Camera,
    AndroidFingerprintAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
