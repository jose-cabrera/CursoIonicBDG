import {Component} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
    .miclase {
      background-color: black;
      color : red;
    }
    
    .miOtraClase {
      color :blue;
    }
  `]
})
export class DatabindingComponent {

  stringInterpolation:string = "Hello";
  numberInterpolation:number = 1993;
  value:string = "Im a value!";

  imagen:string = "http://angularconnect.com/workspace/2015/img/resources/angular.png";

  getMyClass():string {
    return "miOtraClase";
  }

  retornarString():string {
    return "OTRA COSA";
  }

  getMyObjectClass() {
    return {'miclase': false};
  }

  persona = {
    nombre : "jose",
    edad : 23,
    fecha : ""
  };


   onClicked (event : string) {
     alert(event);
   }
  

}


