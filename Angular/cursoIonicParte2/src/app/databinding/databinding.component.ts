import { Component, OnInit ,Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  bindable = "i am";

  @ViewChild('boundParagraph')
  boundParagraph:HTMLElement;



  @Input()
  result:number =0;  // decorador input

  @Input()
  hola:string;

  stringInterpolation:string = "hola";
  numberInterpolation:number = 1993;

  imagen:string = "https://raw.githubusercontent.com/ninya-io/ninya-identity/master/logo/ninya-mascot@2x.png";

  constructor() { }

  ngOnInit() {
  }

  onclicked(event){
    alert("funciona!!!");
    console.log(event);
  }



  persona ={
    nombre :"edward",
    edad:23
  };


}
