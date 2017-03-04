/**
 * Created by danny on 3/03/2017.
 */


function holaMundo(nombre:string){

    return "Hola Mundo " + nombre;
}

var nombre:string =  "Daniel Godinez";

document.getElementById("container").innerText = holaMundo( nombre);