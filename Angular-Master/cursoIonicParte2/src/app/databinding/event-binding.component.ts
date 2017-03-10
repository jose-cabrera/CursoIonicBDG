import { Component, EventEmitter, OutPut } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()" >Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {

  onClicked(){
    alert("Funciono!")
  }

  //Custom Event
  // @OutPut() apachado = new EventEmitter<string>();

  // onClicked(){
  //   this.apachado.emit('It Works!');
  // }

}
