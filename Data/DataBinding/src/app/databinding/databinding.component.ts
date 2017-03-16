import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})

export class DatabindingComponent implements OnInit {

  stringInterpolation:string = "Hello";
  numberInterpolation: number = 1993;

  value:string = "I am databinding"
  imagen:string = "http://cryptomage.io/photos/brands/angular-js.png"




   persona= {
      nombre : "jose",
      edad: "27"
   }

  constructor() { 
 
  }

  ngOnInit() {
    
  }

}
