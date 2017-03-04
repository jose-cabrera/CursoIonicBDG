/**
 * Created by lgutierrez on 3/03/2017.
 */
"use strict";
var camion = (function () {
    function camion() {
    }
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
    camion.prototype.crearCamion = function () {
    };
    return camion;
}());
exports.camion = camion;
