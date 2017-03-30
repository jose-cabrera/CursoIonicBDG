import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage=HomePage;
  constructor(public navCtrl: NavController) {

  //this.pushPage = this;
    //this.pushPage = NavController;

  }


}
