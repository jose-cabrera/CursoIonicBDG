

function holaMundo(nombre:string){
    return "Hola mundo" + nombre;
}

var nombre:string = "Diego";

document.getElementById("container").innerText = holaMundo(nombre);