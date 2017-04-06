
/**
 * Created by JoséPablo on 03/03/17.
 */

class carro {

    color:string;
    puertas:number;
    motor:string;
    marca:string;
    modelo:string;

    constructor(color:string, puertas:number, marca:string) {
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
    }

}


var miCarro : carro = new carro("Rojo", 2, "Toyota");

miCarro.color = "rojo";
miCarro.marca = "Toyota";
miCarro.modelo = "Yaris";
miCarro.puertas = 2;
miCarro.motor = "1500 cc";

console.log(miCarro);

