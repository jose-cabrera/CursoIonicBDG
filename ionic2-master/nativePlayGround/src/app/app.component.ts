import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {OneSignal} from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = HomePage;

  pages:Array<{title:string, component:any}>;

  constructor(public platform:Platform, public statusBar:StatusBar, public splashScreen:SplashScreen,
              private oneSignal:OneSignal) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'List', component: ListPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      try {
        let notificationOpenedCallback = function (jsonData) {
          alert(JSON.stringify(jsonData));
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));

          window["plugins"].OneSignal.getIds(function (ids) {
            console.log('getIds: ' + JSON.stringify(ids));
            alert("userId = " + ids.userId + ", pushToken = " + ids.pushToken);
            localStorage.setItem("pushToken", ids.pushToken);
          });
        };

        window["plugins"].OneSignal
          .startInit("c57d43f5-3ba5-418d-8b5b-1362cafdba0d", "1002320982605")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();
      } catch (e) {
        console.log("OneSignal needs to be tested on a device")
      }

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
