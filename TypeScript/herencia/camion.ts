/**
 * Created by edwar on 03/03/2017.
 */

export  class camion{

   private  _color:string;
   private  _nombre:string;
   private _puertas:number;

    public crearCamion():camion{
        let c:camion = new camion();
        c._color = "Azul";
        return c;
    }
}