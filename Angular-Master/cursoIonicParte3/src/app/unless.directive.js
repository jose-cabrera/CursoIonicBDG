"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UnlessDirective = (function () {
    //what and where
    function UnlessDirective(templateRef, vcRef) {
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    Object.defineProperty(UnlessDirective.prototype, "unless", {
        set: function (condition) {
<<<<<<< HEAD
            if (!condition) {
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.vcRef.clear();
            }
=======
            this.bandera = condition;
            this.cambiar();
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
=======
    UnlessDirective.prototype.cambiar = function () {
        if (!this.bandera) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.vcRef.clear();
        }
    };
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
    __decorate([
        core_1.Input()
    ], UnlessDirective.prototype, "unless");
    UnlessDirective = __decorate([
        core_1.Directive({
            selector: '[unless]'
        })
    ], UnlessDirective);
    return UnlessDirective;
}());
exports.UnlessDirective = UnlessDirective;
//# sourceMappingURL=unless.directive.js.map