import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    console.log(this.navParams.get('userName'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  popToRoot(){
    this.navCtrl.popToRoot();
  }

}
