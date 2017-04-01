"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_1 = require("./user/user");
var UsersPage = (function () {
    function UsersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UsersPage.prototype.onLoadUser = function (name) {
        this.navCtrl.push(user_1.UserPage, { userName: name });
    };
    UsersPage.prototype.ionViewCanEnter = function () {
        console.log('ionViewCanEnter');
        var rnd = Math.random();
        return rnd > 0.1;
    };
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    UsersPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter');
    };
    UsersPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
    };
    UsersPage.prototype.ionViewCanLeave = function () {
        console.log('ionViewCanLeave');
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
        return promise;
    };
    UsersPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave');
    };
    UsersPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave');
    };
    UsersPage.prototype.ionViewWillUnload = function () {
        console.log('ionViewWillUnload');
    };
    UsersPage = __decorate([
        core_1.Component({
            selector: 'page-users',
            templateUrl: 'users.html'
        })
    ], UsersPage);
    return UsersPage;
}());
exports.UsersPage = UsersPage;
//# sourceMappingURL=users.js.map