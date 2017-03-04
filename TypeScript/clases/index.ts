class carro{
    color:string;
    puertas:number;
    motor:string;

    constructor(color:string,puertas:number){
        this.color = color;
        this.puertas = puertas;
    }
}

//import {carro} from "./carro";

var miCarro:carro = new carro("negro",4);

miCarro.color = "negro";
miCarro.puertas = 4;
miCarro.motor = "123";

console.log(miCarro);