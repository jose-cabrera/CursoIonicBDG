/**
 * Created by ENGASMOSH on 03/03/2017.
 */

export class camion{
    private _color : string;
    private  _nombre: string;
    private  _puertas: number;

    private crearCamion() : camion{
        let c : camion = new camion();
        c._color = "Rojo";
        c._nombre = "Cam"
        return c;
    }
}
