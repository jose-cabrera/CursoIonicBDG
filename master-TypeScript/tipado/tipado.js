/**
 * Created by j5zunig on 3/3/17.
 */
function holamundo(nombre) {
    return "hola mundo " + nombre;
}
var nombre = "Juan Antonio";
document.getElementById("container").innerText = holamundo(nombre);
