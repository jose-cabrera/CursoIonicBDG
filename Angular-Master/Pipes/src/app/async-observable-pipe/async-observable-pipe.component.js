"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require("rxjs/Observable");
var AsyncObservablePipeComponent = (function () {
    function AsyncObservablePipeComponent() {
        this.time = new Observable_1.Observable(function (observer) {
            setInterval(function () { return observer.next(new Date().toString()); }, 1000);
        });
    }
    AsyncObservablePipeComponent = __decorate([
        core_1.Component({
            selector: 'async-observable-pipe',
            template: '<div><code>observable|async</code>: Time: {{ time | async }}</div>'
        })
    ], AsyncObservablePipeComponent);
    return AsyncObservablePipeComponent;
}());
exports.AsyncObservablePipeComponent = AsyncObservablePipeComponent;
//# sourceMappingURL=async-observable-pipe.component.js.map