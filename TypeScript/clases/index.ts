export class carro{ //export para que sea accesible desde afuera inportandola

    color: string;
    puertas: number;
    modelo: string;
    motor: string;
    marca: string;

    constructor(color:string, puertas:number, marca:string){
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
    }

}

var miCarro : carro = new carro("Plata",4,"Audi");

miCarro.color = "plata";
miCarro.marca = "Audi";
miCarro.modelo = "A4";
miCarro.puertas = 4;
miCarro.motor = "2.0";
