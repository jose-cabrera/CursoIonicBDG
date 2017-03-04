function holamundo(nombre){
return "HolaMundo " + nombre;
}

var nombre = "Julio Barquero";
document.getElementById("container").innerText = holamundo(nombre);