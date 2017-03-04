/**
 * Created by Marvin on 03/03/2017.
 */
export class camion{
    private _color:string;
    private _nombre:string;
    private _puertas:number;

    private crearCamion():camion{
        let c:camion = new camion();
        c.color = "rojo";
        return c;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get puertas(): number {
        return this._puertas;
    }

    set puertas(value: number) {
        this._puertas = value;
    }
}