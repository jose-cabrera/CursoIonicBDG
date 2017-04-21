"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LowerUpperPipeComponent = (function () {
    function LowerUpperPipeComponent() {
    }
    LowerUpperPipeComponent.prototype.change = function (value) { this.value = value; };
    LowerUpperPipeComponent = __decorate([
        core_1.Component({
            selector: 'lowerupper-pipe',
            template: "<div>\n    <label>Name: </label><input #name (keyup)=\"change(name.value)\" type=\"text\">\n    <p>In lowercase: <pre>'{{value | lowercase}}'</pre>\n    <p>In uppercase: <pre>'{{value | uppercase}}'</pre>\n  </div>"
        })
    ], LowerUpperPipeComponent);
    return LowerUpperPipeComponent;
}());
exports.LowerUpperPipeComponent = LowerUpperPipeComponent;
//# sourceMappingURL=lower-upper-pipe.component.js.map