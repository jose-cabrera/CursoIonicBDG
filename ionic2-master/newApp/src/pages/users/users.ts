import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular/index";
import {UserPage} from "./user/user";
import {Carro} from "../../entitys/Carro";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  constructor(private navCtrl:NavController, private navParams: NavParams){
    console.log(this.navParams.data);
  }

  gotToUser(name:string){

    let carro:Carro = new Carro();
    carro.nombre = '3';
    carro.marca = 'mazda';

    this.navCtrl.push(UserPage,
      {miCarro : carro, arrayCarros : [carro, carro, carro, carro]},
      {
        animate:true,
        direction:'foward',
        duration: 500
      }
    );
  }

}
