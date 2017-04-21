"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AsyncPromisePipeComponent = (function () {
    function AsyncPromisePipeComponent() {
        this.greeting = null;
        this.arrived = false;
        this.resolve = null;
        this.reset();
    }
    AsyncPromisePipeComponent.prototype.reset = function () {
        var _this = this;
        this.arrived = false;
        this.greeting = new Promise(function (resolve, reject) { _this.resolve = resolve; });
    };
    AsyncPromisePipeComponent.prototype.clicked = function () {
        if (this.arrived) {
            this.reset();
        }
        else {
            this.resolve('hi there!');
            this.arrived = true;
        }
    };
    AsyncPromisePipeComponent = __decorate([
        Component({
            selector: 'async-promise-pipe',
            template: "<div>\n    <code>promise|async</code>: \n    <button (click)=\"clicked()\">{{ arrived ? 'Reset' : 'Resolve' }}</button>\n    <span>Wait for it... {{ greeting | async }}</span>\n  </div>"
        })
    ], AsyncPromisePipeComponent);
    return AsyncPromisePipeComponent;
}());
exports.AsyncPromisePipeComponent = AsyncPromisePipeComponent;
//# sourceMappingURL=async-promise-pipe-component.component.js.map