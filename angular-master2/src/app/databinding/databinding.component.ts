import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation:string = "123";
  numberInterpolation:number = 123;
  imgSource:string = "http://angularconnect.com/workspace/2015/img/resources/angular.png";
  inputValue:string = "I'm a value";
  
  onClick(){
    alert("works!");
  }

  persona = {
    nombre:"Dennis",
    apellido: "Oxlaj"
  }
}
