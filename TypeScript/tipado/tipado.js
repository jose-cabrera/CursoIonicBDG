function holaMundo(nombre) {
    return "Hola mundo" + nombre;
}
var nombre = "Diego";
document.getElementById("container").innerText = holaMundo(nombre);
