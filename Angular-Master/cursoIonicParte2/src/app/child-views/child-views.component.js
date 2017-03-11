"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChildViewsComponent = (function () {
    function ChildViewsComponent() {
        this.bindable = "Im a bindable text";
    }
    __decorate([
        core_1.ViewChild('boundParagraph')
    ], ChildViewsComponent.prototype, "boundParagraph");
    ChildViewsComponent = __decorate([
        core_1.Component({
            selector: 'app-child-views',
            template: "\n    <ng-content></ng-content>\n    <p #boundParagraph>\n      {{bindable}}\n    </p>\n    <p>\n        {{boundParagraph.textContent}}    \n    </p>\n  ",
            styles: []
        })
    ], ChildViewsComponent);
    return ChildViewsComponent;
}());
exports.ChildViewsComponent = ChildViewsComponent;
//# sourceMappingURL=child-views.component.js.map