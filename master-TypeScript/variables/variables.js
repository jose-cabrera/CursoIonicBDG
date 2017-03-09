/**
<<<<<<< HEAD
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
=======
 * Created by JoséPablo on 03/03/17.
 */
var nombre = "Jose";
var data = (function () {
    function data() {
    }
    return data;
}());
var d;
function miNombre() {
    var d = new data();
    d.apellido = "cabrera";
    d.nombre = "jose";
    d.edad = 23;
    console.log(d);
}
console.log(d);
miNombre();
console.log(d);
>>>>>>> master
//# sourceMappingURL=variables.js.map