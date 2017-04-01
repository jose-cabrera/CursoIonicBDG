"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var users_1 = require("../users/users");
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.usrPage = users_1.UsersPage;
    }
    HomePage.prototype.onGoToUsers = function () {
        this.navCtrl.push(this.usrPage)
            .catch(function (error) { return console.log('Access denied, Argument was ' + error); });
    };
    HomePage.prototype.ngOnChanges = function () {
        console.log("OnChanges");
    };
    HomePage.prototype.ngOnInit = function () {
        console.log("OnInit");
    };
    HomePage.prototype.ngDoCheck = function () {
        console.log("DoCheck");
    };
    HomePage.prototype.ngAfterContentInit = function () {
        console.log("AfterContentInit");
    };
    HomePage.prototype.ngAfterContentChecked = function () {
        console.log("AfterContetChecked");
    };
    HomePage.prototype.ngAfterViewInit = function () {
        console.log("AfterViewInit");
    };
    HomePage.prototype.ngAfterViewChecked = function () {
        console.log("AfterViewChecked");
    };
    HomePage.prototype.ngOnDestroy = function () {
        console.log("OnDestroy");
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map