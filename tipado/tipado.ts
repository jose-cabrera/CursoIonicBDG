function holaMundo(nombre:string){
    return "Hola mundo " + nombre;
}

var nombre:string = "Jose Ruiz";

document.getElementById("container").innerText = holaMundo(nombre);