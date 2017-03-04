/**
 * Created by danny on 3/03/2017.
 */
"use strict";
var camion = (function () {
    function camion() {
    }
    camion.prototype.crearCamion = function () {
        var c = new camion();
        return c;
    };
    Object.defineProperty(camion.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(camion.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(camion.prototype, "puertas", {
        get: function () {
            return this._puertas;
        },
        set: function (value) {
            this._puertas = value;
        },
        enumerable: true,
        configurable: true
    });
    return camion;
}());
exports.camion = camion;
