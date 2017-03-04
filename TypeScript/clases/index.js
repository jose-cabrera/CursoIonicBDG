"use strict";
var carro_1 = require("./carro");
/**
 * Created by Marvin on 03/03/2017.
 */
var miCarro = new carro_1.carro("hola", 4, "YY", "Toyota");
miCarro.color = "blanco";
miCarro.marca = "mazda";
miCarro.puertas = 4;
miCarro.motor = "XXX";
console.log(miCarro);
