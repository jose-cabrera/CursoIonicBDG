/**
 * Created by j5zunig on 3/3/17.
 */
"use strict";
exports.__esModule = true;
var carro = (function () {
    // No existe sobrecarga de métodos
    function carro(color, marca, modelo, year) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
    }
    return carro;
}());
exports.carro = carro;
