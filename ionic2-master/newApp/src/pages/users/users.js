"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_1 = require("./user/user");
var Carro_1 = require("../../entitys/Carro");
var UsersPage = (function () {
    function UsersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(this.navParams.data);
    }
    UsersPage.prototype.gotToUser = function (name) {
        var carro = new Carro_1.Carro();
        carro.nombre = '3';
        carro.marca = 'mazda';
        this.navCtrl.push(user_1.UserPage, { miCarro: carro, arrayCarros: [carro, carro, carro, carro] }, {
            animate: true,
            direction: 'foward',
            duration: 500
        });
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