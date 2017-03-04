/**
 * Created by edwar on 03/03/2017.
 */
//import {carro}from  "./carro";

class carro{
    color:string;
    puertas: number;
    motor:string;
    marca:string;
    modelo:string;

    constructor(color:string,puertas:number,marca:string){
        this.color = color;
        this.puertas  = puertas;
        this.marca = marca;
    }


}

var miCarro : carro = new carro("verde",4,"toyota");

this.miCarro.marca = "Toyota";
this.miCarro.color = "Rojo";
this.miCarro.modelo = "hilux";
this.miCarro.motor = "ABXVS";
this.miCarro.puertas = 4;

console.log(miCarro);