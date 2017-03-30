import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UsersPage} from "../users/users";
import {UserPage} from "../user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToUsers(){
    this.navCtrl.push(UsersPage);
  }
  onGoToDanny(){
    this.navCtrl.push(UserPage);
  }

}
