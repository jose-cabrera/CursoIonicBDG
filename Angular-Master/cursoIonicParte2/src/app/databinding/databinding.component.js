"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DatabindingComponent = (function () {
    function DatabindingComponent() {
        this.stringInterpolation = "Hello";
        this.numberInterpolation = 1993;
        this.value = "Im a value!";
        this.imagen = "http://angularconnect.com/workspace/2015/img/resources/angular.png";
        this.persona = {
            nombre: "jose",
            edad: 23,
            fecha: ""
        };
    }
    DatabindingComponent.prototype.getMyClass = function () {
        return "miOtraClase";
    };
    DatabindingComponent.prototype.retornarString = function () {
        return "OTRA COSA";
    };
    DatabindingComponent.prototype.getMyObjectClass = function () {
        return { 'miclase': false };
    };
    DatabindingComponent.prototype.onClicked = function (event) {
        alert(event);
    };
    DatabindingComponent.prototype.articulosDescardados = function (event) {
        if (event) {
            alert("ARticulos fueron descargados exitosamente");
        }
        else
            alert("ARticulos NO fueron descargados exitosamente");
    };
    DatabindingComponent = __decorate([
        core_1.Component({
            selector: 'app-databinding',
            templateUrl: './databinding.component.html',
            styles: ["\n    .miclase {\n      background-color: black;\n      color : red;\n    }\n    \n    .miOtraClase {\n      color :blue;\n    }\n  "]
        })
    ], DatabindingComponent);
    return DatabindingComponent;
}());
exports.DatabindingComponent = DatabindingComponent;
//# sourceMappingURL=databinding.component.js.map