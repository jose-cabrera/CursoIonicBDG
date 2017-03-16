import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
  template: `
   <button (click)="onClicked($event)" >Click me!</button>
  `
})

export class EventBindingComponent {

    onClicked(event){
      alert("Funciono!")
      console.log(event);
    }
}
