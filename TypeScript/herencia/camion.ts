/**
 * Created by lgutierrez on 3/03/2017.
 */

export class camion {
    private _color: string;
    private _nombre: string;
    private _puertas: string;

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }


    get puertas(): string {
        return this._puertas;
    }

    set puertas(value: string) {
        this._puertas = value;
    }

    public crearCamion(){

}
}