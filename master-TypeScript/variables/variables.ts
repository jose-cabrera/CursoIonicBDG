/**
<<<<<<< HEAD
 * Created by j5zunig on 3/3/17.
 */
//import {carro} from "./carro.js"

class carro {
    color: string;
    marca: string;
    modelo: string;

    // No existe sobrecarga de métodos

    constructor(color: string, marca: string, modelo: string) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
}

var nombre = "jzunigac";    // var declara variables globales

function miNombre() {
     //let nombre="juan"; // let Accesible solo dentro del método

    console.log(nombre);
}

var miCarro: carro = new carro("Blanco","Honda","civic 2000")


console.log(nombre);
=======
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
>>>>>>> master

