/**
 * Created by danny on 3/03/2017.
 */
"use strict";
//con export hacemos como publica la clase
var carro = (function () {
    function carro(color, puertas, marca, modelo) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
        this.modelo = modelo;
    }
    return carro;
}());
exports.carro = carro;
