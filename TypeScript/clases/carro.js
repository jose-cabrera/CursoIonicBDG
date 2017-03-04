"use strict";
/**
 * Created by edwar on 03/03/2017.
 */
var carro = (function () {
    function carro(color, puertas, marca) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
    }
    return carro;
}());
exports.carro = carro;
