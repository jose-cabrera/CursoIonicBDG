/**
 * Created by Marvin on 03/03/2017.
 */
var hola = (function () {
    function hola() {
    }
    return hola;
}());
var h = new hola();
//accesible
h.edad = 26;
//no accesible
//h.nombre = "marv";
