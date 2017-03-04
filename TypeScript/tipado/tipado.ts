function HolaMundo(nombre){
    return "Hola Mundo " + nombre;
}

var nombre = "Dennis Oxlaj"

document.getElementById("idSection").innerHTML = HolaMundo(nombre);