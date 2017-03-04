/**
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

