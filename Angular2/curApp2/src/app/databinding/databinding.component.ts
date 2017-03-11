import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  private stringInterpolation: string = "Hello world string interpolation";
  private imgString = "https://udemy-images.udemy.com/course/750x422/500628_a962.jpg";
  private modelo: string;

  constructor() { }

  ngOnInit() {
  }

  getStilo(): string{
    return "miclase";
  }

  doIt(event){
    alert("Do it Click");
    console.log(event);
  }

}
