var nombre = "Diego"; //variable tipo global

class data{
    nombre;
    apellido;
}

var d:data;

function miNombre(){
    let nombre = "Pablo"; //Variable accesible solo para el metodo

    console.log(nombre)
}

function miNombre2(){
    d = new data();
    d.apellido = "Diego";
    d.nombre = "Fernandez";
    console.log(d)
}

console.log(d);

miNombre2();

console.log(d);