/**
 * Created by edwar on 03/03/2017.
 */
"use strict";
var camion = (function () {
    function camion() {
    }
    camion.prototype.crearCamion = function () {
        var c = new camion();
        c._color = "Azul";
        return c;
    };
    return camion;
}());
exports.camion = camion;
