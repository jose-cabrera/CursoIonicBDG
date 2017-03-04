/**
 * Created by danny on 3/03/2017.
 */
//variable nivel global -> var
var nombre = " Danny";
var data = (function () {
    function data() {
    }
    return data;
}());
var d;
//variable accesible en el metodo -> Let
function miNombre() {
    var nombre = "Pedo y pablo";
    d = new data();
    d.apellido = "daniel";
    d.nombre = "me quede atras";
    console.log(d);
}
miNombre();
console.log(nombre);
