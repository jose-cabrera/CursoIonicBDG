import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UsersPage} from "../users/users";
import {UserPage} from "../user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userPage = UsersPage;

  constructor(public navCtrl: NavController) {

  }

  onGoToUsers(){
    this.navCtrl.push(UsersPage);
  }
<<<<<<< HEAD
  onGoToDanny(){
    this.navCtrl.push(UserPage);
  }
=======
>>>>>>> 053fd63088c20df294040b46d539f4a968aae1da

}
