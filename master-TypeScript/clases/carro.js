<<<<<<< HEAD
/**
 * Created by j5zunig on 3/3/17.
 */
var carro = (function () {
    // No existe sobrecarga de métodos
    function carro(color, marca, modelo, year) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
    }
    return carro;
})();
=======
"use strict";
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
>>>>>>> master
exports.carro = carro;
//# sourceMappingURL=carro.js.map