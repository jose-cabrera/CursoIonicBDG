/**
 * Created by JoséPablo on 03/03/17.
 */

var nombre = "Jose";

class data {
    nombre:string;
    apellido:string;
    edad:number;
}

var d:data;

function miNombre(){
    let d = new data();
    d.apellido = "cabrera";
    d.nombre = "jose";
    d.edad = 23;
    console.log(d);
}

console.log(d);
miNombre();
console.log(d);

