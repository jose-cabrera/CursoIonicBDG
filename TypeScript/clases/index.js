/**
 * Created by lgutierrez on 3/03/2017.
 */
/*import {carro} from "./carro";*/
var carro = (function () {
    function carro(color, puertas, marca, modelo) {
        this.color = "Gris";
        this.puertas = 4;
        this.modelo = "2016";
        this.marca = "Toyota";
    }
    return carro;
}());
var miCarro = new carro("Rojo", 2, "Mazda", "2015");
console.log(miCarro);
miCarro.color = "rojo";
miCarro.marca = "Honda";
miCarro.modelo = "2016";
miCarro.puertas = 3;
console.log(miCarro);
