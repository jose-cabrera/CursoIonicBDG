import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  valor:string = "Este es un valor";

  getString(): string{
    return "Test String";
  }


  getClass() {
    return {'myClass': true}
  }

}
