export class carro {
    color: string;
    puertas: number;
    motor: string;
    marca: string;
    modelo: string;
    
    constructor (color: string, puertas: number , motor: string, marca: string, modelo: string){
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
    }
}

var miCarro : carro = new carro("negro",4,"2345","toyota","2017");