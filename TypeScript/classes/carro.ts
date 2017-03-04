/**
 * Created by danny on 3/03/2017.
 */

//con export hacemos como publica la clase
export class carro{
    color:string,
    puertas:number,
    marca:string,
    modelo:number


    constructor(color:string, puertas:number, marca:string, modelo:number){
        this.color = color;
        this.puertas = puertas;
        this.marca = marca;
        this.modelo = modelo;

    }

}