"use strict";
/**
 * Created by Marvin on 03/03/2017.
 */
var camion = (function () {
    function camion() {
    }
    camion.prototype.crearCamion = function () {
        var c = new camion();
        c.color = "rojo";
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
    Object.defineProperty(camion.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
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
