"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SlicePipeStringComponent = (function () {
    function SlicePipeStringComponent() {
        this.str = 'abcdefghij';
    }
    SlicePipeStringComponent = __decorate([
        core_1.Component({
            selector: 'slice-string-pipe',
            template: "<div>\n    <p>{{str}}[0:4]: '{{str | slice:0:4}}' - output is expected to be 'abcd'</p>\n    <p>{{str}}[4:0]: '{{str | slice:4:0}}' - output is expected to be ''</p>\n    <p>{{str}}[-4]: '{{str | slice:-4}}' - output is expected to be 'ghij'</p>\n    <p>{{str}}[-4:-2]: '{{str | slice:-4:-2}}' - output is expected to be 'gh'</p>\n    <p>{{str}}[-100]: '{{str | slice:-100}}' - output is expected to be 'abcdefghij'</p>\n    <p>{{str}}[100]: '{{str | slice:100}}' - output is expected to be ''</p>\n  </div>"
        })
    ], SlicePipeStringComponent);
    return SlicePipeStringComponent;
}());
exports.SlicePipeStringComponent = SlicePipeStringComponent;
//# sourceMappingURL=slice-pipe-string.component.js.map