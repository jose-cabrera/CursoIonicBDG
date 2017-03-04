function holaMundo(nombre) {
    return "Hola mundo " + nombre;
}
var nombre = "Jose Ruiz";
document.getElementById("container").innerText = holaMundo(nombre);
