import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked($event)" >Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {

//  onClicked(event){
  //  alert("Funciono!")
   // console.log(event);
  //}



  //Custom Event
   @OutPut() apachado = new EventEmitter<string>();

  // onClicked(){
  //   this.apachado.emit('It Works!');
  // }

}
