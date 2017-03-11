import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: ['.miotraclase{color:red;}']
})
export class DataBindingComponent  {

  strinngInterpolation:string ="hola";
  numberInterpolation:number = 1990;
  mivalor:string = "I am a value!";
  imagen:string="http://vignette1.wikia.nocookie.net/es.pokemon/images/f/fa/Glaceon.png/revision/latest?cb=20080905135800";


  getMyClass():string{

    return "miotraclase";
  }



  retornarString(ingreso:string):string{

    return "Ingreso"+ingreso;

  }

  persona = {
    nombre : "Danny",
    edad : 26
  };


}
