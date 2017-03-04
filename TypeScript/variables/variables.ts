//etma-script-6

var nombre = "Yo";

class data{
    nombre:string;
    apellido:string;
    edad:number;
}

var d:data;

function miNombre(){
    let d = new data();
    d.nombre ="bilhan";
    d.apellido = "lopez";
    d.edad = 19;
    console.log(d);
}

console.log(d);
miNombre();
console.log(d);