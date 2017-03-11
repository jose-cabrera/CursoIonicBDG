import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
    .miClase {
        color: red;
    }
    
    .miOtraClase {
        color: blue;
    }
  `]
})
export class DatabindingComponent{

  stringInterpolation:string = "Hello";
  numberInterpolation:number = 1993;
  value:string = "I am a value";
  imagen:string = "http://corsi.corley.it/angularjs-logo.png";
  
  getMyClass():string{
    return 'miOtraClase';
  }
  
  getClass(){
    return {'miClase': true };
  }
  
  persona = {
    nombre: 'Julio',
    edad: '32'
  };
}
