"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TwoWayBindingComponent = (function () {
    function TwoWayBindingComponent() {
    }
    TwoWayBindingComponent.prototype.ngOnInit = function () {
    };
    TwoWayBindingComponent = __decorate([
        core_1.Component({
            selector: 'app-two-way-binding',
            template: "\n    <p>\n      two-way-binding Works!\n    </p>\n  ",
            styles: []
        })
    ], TwoWayBindingComponent);
    return TwoWayBindingComponent;
}());
exports.TwoWayBindingComponent = TwoWayBindingComponent;
//# sourceMappingURL=two-way-binding.component.js.map