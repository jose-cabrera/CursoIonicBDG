    /**
 * Created by Marvin on 03/03/2017.
 */
var nombre = "Marvin";

class data{
    nombre;
    apellido;
}
//variable global
var d:data;

function miNombre(){
    //El let ayuda solo a usar dicha variable solo en mi funcion (variable local).
    let nombre = "Erick";
    console.log(nombre);

    d = new data();
    d.apellido = "guti";
    d.nombre = "eder";
    console.log(d);
}

miNombre();
console.log(nombre);