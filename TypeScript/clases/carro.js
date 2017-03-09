"use strict";
/**
 * Created by lgutierrez on 3/03/2017.
 */
var carro = (function () {
    function carro(color, puertas, marca, modelo) {
        this.color = "Gris";
        this.puertas = 4;
        this.modelo = "2016";
        this.marca = "Toyota";
    }
    return carro;
}());
exports.carro = carro;
