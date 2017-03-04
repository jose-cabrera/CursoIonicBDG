/**
 * Created by Marvin on 03/03/2017.
 */
export class carro{
    color:string;
    puertas:number;
    motor: string;
    marca:string;

    constructor(color:string, puertas:number,motor:string, marca:string){
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
        this.motor = motor;
    }
}
