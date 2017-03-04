export class camion{
     private  _color: string;
     private nombre:string;
     private puertas:number;

     private creaCamion() : camion{

         let c:camion = new camion();
         c._color = "rojo";
         return c;
     }
}