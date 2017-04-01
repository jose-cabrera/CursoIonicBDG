import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Web} from "../../providers/web";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homePage = HomePage;

  constructor(public navCtrl: NavController, private web:Web) {

  }

  consumeAPI(){
    this.web.load().then(data => {
      console.log(data);
    })
  }

}
