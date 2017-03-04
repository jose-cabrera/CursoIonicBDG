var nombre = "Julio";
var data = (function () {
    function data() {
    }
    return data;
}());
var d;
function miNombre() {
    d = new data();
    d.apellido = "Barquero";
    d.nombre = "Julio";
    d.edad = 32;
    console.log(d);
}
console.log(d);
miNombre();
console.log(d);
