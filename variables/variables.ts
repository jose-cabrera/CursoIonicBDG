var nombre = "Julio";

class data {
nombre : string;
apellido: string;
edad: number;
}
var d:data;

function miNombre() {
    d =  new data();
    d.apellido = "Barquero";
    d.nombre = "Julio";
    d.edad = 32;
    console.log(d);
}

console.log(d);
miNombre();
console.log(d);