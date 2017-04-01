import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
<<<<<<< HEAD
=======
import {Web} from "../../providers/web";
>>>>>>> 053fd63088c20df294040b46d539f4a968aae1da

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  pushPage=HomePage;
  constructor(public navCtrl: NavController) {

  //this.pushPage = this;
    //this.pushPage = NavController;

  }

=======
  homePage = HomePage;

  constructor(public navCtrl: NavController, private web:Web) {

  }

  consumeAPI(){
    this.web.load().then(data => {
      console.log(data);
    })
  }
>>>>>>> 053fd63088c20df294040b46d539f4a968aae1da

}
