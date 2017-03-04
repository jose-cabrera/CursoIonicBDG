/**
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
}