"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OtherComponent = (function () {
    function OtherComponent() {
    }
    OtherComponent.prototype.ngOnInit = function () {
    };
    OtherComponent = __decorate([
        core_1.Component({
            selector: 'app-other',
            template: "\n    <article>\n        <ng-content></ng-content>\n    </article>\n  ",
            styles: ["\n  article {\n      border : 1px solid blue;\n      color: red;\n      background-color: black;\n  }\n \n  "]
        })
    ], OtherComponent);
    return OtherComponent;
}());
exports.OtherComponent = OtherComponent;
//# sourceMappingURL=other.component.js.map