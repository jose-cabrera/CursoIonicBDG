/**
 * Created by Marvin on 03/03/2017.
 */
function holamundo(nombre:string){
    return "Hola mundo " + nombre;

}
var nombre:string = "Marvin Gutierrez ";
document.getElementById("conteiner").innerText = holamundo(nombre);
