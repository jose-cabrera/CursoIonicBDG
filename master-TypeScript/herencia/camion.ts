/**
<<<<<<< HEAD
 * Created by j5zunig on 3/3/17.
 */

export class camion {
    private _color: string;
    private _marca: string;
    private _modelo: string;
    private _year: number;

    public crearCamion() : camion {

    }
 }
=======
 * Created by JoséPablo on 03/03/17.
 */
export class camion {

    private color:string;
    private nombre:string;
    private puertas:number;

    public crearCamion() : camion{
        let c:camion = new camion();
        c.color = "rojo";
        
        return c;
    }
}
>>>>>>> master
