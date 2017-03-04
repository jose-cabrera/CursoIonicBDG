var carro = (function () {
    function carro(color, puertas) {
        this.color = color;
        this.puertas = puertas;
    }
    return carro;
}());
//import {carro} from "./carro";
var miCarro = new carro("negro", 4);
miCarro.color = "negro";
miCarro.puertas = 4;
miCarro.motor = "123";
console.log(miCarro);
