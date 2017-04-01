import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UsersPage} from "../pages/users/users";
<<<<<<< HEAD
import {UserPage} from "../pages/user/user";
=======
import {UserPage} from "../pages/users/user/user";
>>>>>>> 053fd63088c20df294040b46d539f4a968aae1da

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
