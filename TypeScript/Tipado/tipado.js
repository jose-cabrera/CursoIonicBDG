/**
 * Created by Marvin on 03/03/2017.
 */
function holamundo(nombre) {
    return "Hola mundo " + nombre;
}
var nombre = "Marvin Gutierrez ";
document.getElementById("conteiner").innerText = holamundo(nombre);
