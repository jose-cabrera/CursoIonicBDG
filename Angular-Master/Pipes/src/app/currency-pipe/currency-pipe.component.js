"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CurrencyPipeComponent = (function () {
    function CurrencyPipeComponent() {
        this.a = 0.259;
        this.b = 1.3495;
    }
    CurrencyPipeComponent = __decorate([
        core_1.Component({
            selector: 'currency-pipe',
            template: "<div>\n    <p>A: {{a | currency:'USD':false}}</p>\n    <p>B: {{b | currency:'USD':true:'4.2-2'}}</p>\n  </div>"
        })
    ], CurrencyPipeComponent);
    return CurrencyPipeComponent;
}());
exports.CurrencyPipeComponent = CurrencyPipeComponent;
//# sourceMappingURL=currency-pipe.component.js.map