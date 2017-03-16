"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EventBindingComponent = (function () {
    function EventBindingComponent() {
        // onClicked(event){
        //   alert("Funciono!")
        //   console.log(event);
        // }
        //Custom Event
        this.apachado = new core_1.EventEmitter();
        this.articulosDescargados = new core_1.EventEmitter();
    }
    EventBindingComponent.prototype.onClicked = function () {
        this.apachado.emit('It Works!');
        this.articulosDescargados.emit(false);
    };
    __decorate([
        core_1.Output()
    ], EventBindingComponent.prototype, "apachado");
    __decorate([
        core_1.Output("descargados")
    ], EventBindingComponent.prototype, "articulosDescargados");
    EventBindingComponent = __decorate([
        core_1.Component({
            selector: 'app-event-binding',
            template: "\n    <button (click)=\"onClicked($event)\" >Click me!</button>\n  ",
            styles: []
        })
    ], EventBindingComponent);
    return EventBindingComponent;
}());
exports.EventBindingComponent = EventBindingComponent;
//# sourceMappingURL=event-binding.component.js.map