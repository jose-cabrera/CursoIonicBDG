/**
 * Created by edwar on 03/03/2017.
 */
var nombre = "edward";

class data {
    nombre:string;
    apellido:string;
    edad:number;
}
var d:data;



function miNombre(){
    d = new data();
    d.apellido = "gomez";
    d.nombre = "edward";
    d.edad = 23;
    let nombre = "alexander";
    console.log(nombre);
}


console.log(nombre);
this.miNombre();
console.log(d);