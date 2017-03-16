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
        this.bindable = "i am";
        this.result = 0; // decorador input
        this.stringInterpolation = "hola";
        this.numberInterpolation = 1993;
        this.imagen = "https://raw.githubusercontent.com/ninya-io/ninya-identity/master/logo/ninya-mascot@2x.png";
        this.persona = {
            nombre: "edward",
            edad: 23
        };
    }
    DatabindingComponent.prototype.ngOnInit = function () {
    };
    DatabindingComponent.prototype.onclicked = function (event) {
        alert("funciona!!!");
        console.log(event);
    };
    __decorate([
        core_1.ViewChild('boundParagraph')
    ], DatabindingComponent.prototype, "boundParagraph", void 0);
    __decorate([
        core_1.Input()
    ], DatabindingComponent.prototype, "result", void 0);
    __decorate([
        // decorador input
        core_1.Input()
    ], DatabindingComponent.prototype, "hola", void 0);
    DatabindingComponent = __decorate([
        core_1.Component({
            selector: 'app-databinding',
            templateUrl: './databinding.component.html',
            styleUrls: ['./databinding.component.css']
        })
    ], DatabindingComponent);
    return DatabindingComponent;
}());
exports.DatabindingComponent = DatabindingComponent;
