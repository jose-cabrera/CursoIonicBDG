/**
 * Created by lgutierrez on 3/03/2017.
 */
var nombre = "Luis";

class data {
    nombre:string;
    apellido:string;
}

var d:data;

function minombre2()
{
    d = new data();
    d.apellido= "Gutierrez Aleman";
    d.nombre = "Luis Gutierrez";
    console.log(d);
}
function miNombre()
{
    let nombre = "**Alberto**";
    console.log(nombre);

}
console.log(d);
console.log(nombre);
minombre2();
console.log(d);
miNombre();
console.log(nombre);