/**
 * Created by lgutierrez on 3/03/2017.
 */
function holamundo(nombre) {
    return "hola mundo " + nombre;
}
var nombre = "Luis Gutierrez";
document.getElementById("container").innerText = holamundo(nombre);
