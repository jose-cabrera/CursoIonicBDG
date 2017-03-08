"use strict";
/**
 * Created by JoséPablo on 03/03/17.
 */
var demo = (function () {
    function demo(listener) {
        this.listener = listener;
    }
    demo.prototype.acelar = function () {
        // acelerar
        this.listener.velocidad++;
    };
    demo.prototype.getVelocidad = function () {
        return this.listener.velocidad;
    };
    demo.prototype.frena = function () {
        // 
        var d = JSON.parse("{string}");
        var objeto = new demo(d);
    };
    return demo;
}());
//# sourceMappingURL=index.js.map