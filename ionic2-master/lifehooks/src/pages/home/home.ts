<<<<<<< HEAD
import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
=======
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
>>>>>>> fc693eaaf91755f6f5910b527d1bc7a545a32c0c

import {UsersPage} from "../users/users";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
<<<<<<< HEAD
export class HomePage implements OnChanges, OnInit, DoCheck {
=======
export class HomePage implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
>>>>>>> fc693eaaf91755f6f5910b527d1bc7a545a32c0c
  usrPage = UsersPage;

  constructor(private navCtrl:NavController) {
  }

  onGoToUsers() {
    this.navCtrl.push(this.usrPage)
      .catch((error) => console.log('Access denied, Argument was ' + error));
  }
<<<<<<< HEAD
  ngOnChanges(){
    console.log(" hicieron cambios");
  }
  ngOnInit(){
    console.log(" INIT");
  }
  ngDoCheck(){
    console.log(" Check");
  }


=======

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
>>>>>>> fc693eaaf91755f6f5910b527d1bc7a545a32c0c

}
