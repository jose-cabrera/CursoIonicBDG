"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HighlightDirective = (function () {
    // constructor(private elementRef : ElementRef, private renderer : Renderer) {
    function HighlightDirective() {
        // Changing attributes, the bad way
        // this.elementRef.nativeElement.style.backgroundColor = "green";
        // Changing attibutes, the correct way
        // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.defaultColor = "white";
        this.highlightColor = "green";
    }
    //TODO: Listening to Events
    HighlightDirective.prototype.mouseover = function () {
        // this.backgroundColor = "green";
        this.backgroundColor = this.highlightColor;
    };
    HighlightDirective.prototype.mouseleave = function () {
        // this.backgroundColor = "white";
        this.backgroundColor = this.defaultColor;
    };
    HighlightDirective.prototype.onClick = function (event) {
        console.log("Event Target" + event.target);
    };
    Object.defineProperty(HighlightDirective.prototype, "setColor", {
        get: function () {
            return this.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.ngOnInit = function () {
        this.backgroundColor = this.defaultColor;
    };
    __decorate([
        core_1.HostListener('mouseenter')
    ], HighlightDirective.prototype, "mouseover");
    __decorate([
        core_1.HostListener('mouseleave')
    ], HighlightDirective.prototype, "mouseleave");
    __decorate([
        core_1.HostListener('click', ['$event'])
    ], HighlightDirective.prototype, "onClick");
    __decorate([
        core_1.HostBinding('style.backgroundColor')
    ], HighlightDirective.prototype, "setColor");
    __decorate([
        core_1.Input()
    ], HighlightDirective.prototype, "defaultColor");
    __decorate([
        core_1.Input("highlight")
    ], HighlightDirective.prototype, "highlightColor");
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[highlight]'
        })
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map