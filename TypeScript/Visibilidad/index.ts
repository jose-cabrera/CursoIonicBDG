/**
 * Created by Marvin on 03/03/2017.
 */
class hola{
    private nombre:string;
    public edad:number;
    protected  apellido:string;
}
var h:hola = new hola();

//accesible
h.edad = 26;

//no accesible
//h.nombre = "marv";
