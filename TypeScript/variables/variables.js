/**
 * Created by edwar on 03/03/2017.
 */
var nombre = "edward";
var data = (function () {
    function data() {
    }
    return data;
}());
var d;
function miNombre() {
    d = new data();
    d.apellido = "gomez";
    d.nombre = "edward";
    d.edad = 23;
    var nombre = "alexander";
    console.log(nombre);
}
console.log(nombre);
this.miNombre();
console.log(d);
