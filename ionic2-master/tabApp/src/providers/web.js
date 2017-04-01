"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
/*
 Generated class for the Web provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var Web = (function () {
    function Web(http) {
        this.http = http;
        console.log('Hello Web Provider');
    }
    Web.prototype.load = function () {
        var _this = this;
        // if (this.data) {
        //   // console.log("Tipos descargados anteriormente");
        //   return Promise.resolve(this.data);
        // }
        return new Promise(function (resolve) {
            // console.log("Consumiendo servicio de tipos ubicaciones");
            _this.http.get("https://api.github.com/users/jose-cabrera")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // console.log("SERVICIO CONSUMIDO: " + JSON.stringify(data));
                _this.data = data;
                console.log(_this.data);
                resolve(_this.data);
            });
        });
    };
    Web = __decorate([
        core_1.Injectable()
    ], Web);
    return Web;
}());
exports.Web = Web;
//# sourceMappingURL=web.js.map