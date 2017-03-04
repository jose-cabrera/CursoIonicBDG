/**
 * Created by ENGASMOSH on 03/03/2017.
 */
"use strict";
var camion = (function () {
    function camion() {
    }
    camion.prototype.crearCamion = function () {
        var c = new camion();
        c._color = "Rojo";
        c._nombre = "Cam";
        return c;
    };
    return camion;
}());
exports.camion = camion;
