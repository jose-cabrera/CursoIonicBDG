/**
 * Created by j5zunig on 3/3/17.
 */

function holamundo(nombre: string) {
    return "hola mundo "+nombre;
}

var nombre = "Juan Antonio Z.";

document.getElementById("container").innerText = holamundo(nombre);
