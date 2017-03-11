/**
 * Created by JoséPablo on 03/03/17.
 */
class hola {

    private nombre:string;
    public edad:number;
    protected apellido:string;

}

var h:hola = new hola();

//acesible
h.edad = 23;

//no accesible
h.nombre = "Jose";
