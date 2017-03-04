"use strict";
/**
 * Created by Marvin on 03/03/2017.
 */
var carro = (function () {
    function carro(color, puertas, motor, marca) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
        this.motor = motor;
    }
    return carro;
}());
exports.carro = carro;
