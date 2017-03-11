import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked($event)" >Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {

  // onClicked(event){
  //   alert("Funciono!")
  //   console.log(event);
  // }

  //Custom Event
//  @Output() 
//  apachado = new EventEmitter<string>();
@Output()
apachado = new EventEmitter<string>();

  onClicked(){
    console.log("hola");
    this.apachado.emit('It Works!');
  }

}
