var nombre = "Diego"; //variable tipo global
var data = (function () {
    function data() {
    }
    return data;
}());
var d;
function miNombre() {
    var nombre = "Pablo"; //Variable accesible solo para el metodo
    console.log(nombre);
}
function miNombre2() {
    d = new data();
    d.apellido = "Diego";
    d.nombre = "Fernandez";
    console.log(d);
}
console.log(d);
miNombre2();
console.log(d);
