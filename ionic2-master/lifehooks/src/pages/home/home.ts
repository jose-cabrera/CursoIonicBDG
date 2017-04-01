import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

import {UsersPage} from "../users/users";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  usrPage = UsersPage;

  constructor(private navCtrl:NavController) {
  }

  onGoToUsers() {
    this.navCtrl.push(this.usrPage)
      .catch((error) => console.log('Access denied, Argument was ' + error));
  }

  model:string="";

  ngOnChanges() {
    console.log("OnChanges");
  }

  ngOnInit() {
    console.log("OnInit");
  }

  ngDoCheck() {
    console.log("DoCheck");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AfterContetChecked");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("OnDestroy");
  }

}
