/**
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