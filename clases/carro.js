"use strict";
exports.__esModule = true;
var carro = (function () {
    function carro(color, puertas, motor, marca, modelo) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
    }
    return carro;
}());
exports.carro = carro;
var miCarro = new carro("negro", 4, "2345", "toyota", "2017");
