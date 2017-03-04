function holamundo(nombre:string){
    return "Hola Mundo " + nombre;
}

var nombre : string = "Bilhan Lopez";

document.getElementById("container").innerHTML = holamundo(nombre);