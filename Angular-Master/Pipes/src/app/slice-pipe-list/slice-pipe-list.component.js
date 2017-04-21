"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SlicePipeListComponent = (function () {
    function SlicePipeListComponent() {
        this.collection = ['a', 'b', 'c', 'd'];
    }
    SlicePipeListComponent = __decorate([
        core_1.Component({
            selector: 'slice-list-pipe',
            template: "<ul>\n    <li *ngFor=\"let i of collection | slice:1:3\">{{i}}</li>\n  </ul>"
        })
    ], SlicePipeListComponent);
    return SlicePipeListComponent;
}());
exports.SlicePipeListComponent = SlicePipeListComponent;
//# sourceMappingURL=slice-pipe-list.component.js.map