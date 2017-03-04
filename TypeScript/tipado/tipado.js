/**
 * Created by danny on 3/03/2017.
 */
function holaMundo(nombre) {
    return "Hola Mundo " + nombre;
}
var nombre = "Daniel Godinez";
document.getElementById("container").innerText = holaMundo(nombre);
