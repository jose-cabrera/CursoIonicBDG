/**
 * Created by danny on 3/03/2017.
 */

export class camion{

    private _color:string;
    private _marca:string;
    private _puertas:number;


    public crearCamion():camion{

        let c:camion = new camion();

        return c;


    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(value: string) {
        this._marca = value;
    }

    get puertas(): number {
        return this._puertas;
    }

    set puertas(value: number) {
        this._puertas = value;
    }
}