import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: []
})
export class DatabindingComponent implements OnInit {

  stringInterpolation:string = "Hello";
  numberInterpolation:number = 1993;
  value:string = "Im a value!";

  // onClicked (event : string) {
  //   alert(event);
  // }

}
