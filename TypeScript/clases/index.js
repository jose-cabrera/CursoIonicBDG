/**
 * Created by edwar on 03/03/2017.
 */
//import {carro}from  "./carro";
var carro = (function () {
    function carro(color, puertas, marca) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
    }
    return carro;
}());
var miCarro = new carro("verde", 4, "toyota");
this.miCarro.marca = "Toyota";
this.miCarro.color = "Rojo";
this.miCarro.modelo = "hilux";
this.miCarro.motor = "ABXVS";
this.miCarro.puertas = 4;
console.log(miCarro);
