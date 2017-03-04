/**
 * Created by JoséPablo on 03/03/17.
 */
var carro = (function () {
    function carro(color, puertas, marca) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
    }
    return carro;
}());
var miCarro = new carro("Rojo", 2, "Toyota");
miCarro.color = "rojo";
miCarro.marca = "Toyota";
miCarro.modelo = "Yaris";
miCarro.puertas = 2;
miCarro.motor = "1500 cc";
console.log(miCarro);
//# sourceMappingURL=index.js.map