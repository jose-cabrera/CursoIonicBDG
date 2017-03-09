/**
<<<<<<< HEAD
 * Created by j5zunig on 3/3/17.
 */

export class carro {
    color: string;
    marca: string;
    modelo: string;
    year: number;


    // No existe sobrecarga de métodos

    constructor(color: string, marca: string, modelo: string, year: number) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
    }
=======
 * Created by JoséPablo on 03/03/17.
 */
export class carro {

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
    
>>>>>>> master
}