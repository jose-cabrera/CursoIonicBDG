import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';

import { UsersPage } from "../users/users";
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnChanges, OnInit, DoCheck {
  usrPage = UsersPage;

  constructor (private navCtrl: NavController) {}

  onGoToUsers() {
    this.navCtrl.push(this.usrPage)
      .catch((error) => console.log('Access denied, Argument was ' + error));
  }
  ngOnChanges(){
    console.log(" hicieron cambios");
  }
  ngOnInit(){
    console.log(" INIT");
  }
  ngDoCheck(){
    console.log(" Check");
  }



}
