/**
 * Created by lgutierrez on 3/03/2017.
 */
function holamundo (nombre:string)
{
    return "hola mundo "+ nombre;
}
var nombre:string = "Luis Gutierrez";
document.getElementById("container").innerText = holamundo(nombre);