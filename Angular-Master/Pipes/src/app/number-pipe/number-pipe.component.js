"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NumberPipeComponent = (function () {
    function NumberPipeComponent() {
        this.pi = 3.141592;
        this.e = 2.718281828459045;
    }
    NumberPipeComponent = __decorate([
        core_1.Component({
            selector: 'number-pipe',
            template: "<div>\n    <p>e (no formatting): {{e}}</p>\n    <p>e (3.1-5): {{e | number:'3.1-5'}}</p>\n    <p>pi (no formatting): {{pi}}</p>\n    <p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>\n  </div>"
        })
    ], NumberPipeComponent);
    return NumberPipeComponent;
}());
exports.NumberPipeComponent = NumberPipeComponent;
//# sourceMappingURL=number-pipe.component.js.map