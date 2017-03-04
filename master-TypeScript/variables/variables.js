/**
 * Created by j5zunig on 3/3/17.
 */
//import {carro} from "./carro.js"
var carro = (function () {
    // No existe sobrecarga de métodos
    function carro(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    return carro;
})();
var nombre = "jzunigac"; // var declara variables globales
function miNombre() {
    //let nombre="juan"; // let Accesible solo dentro del método
    console.log(nombre);
}
var miCarro = new carro("Blanco", "Honda", "civic 2000");
console.log(nombre);
//# sourceMappingURL=variables.js.map