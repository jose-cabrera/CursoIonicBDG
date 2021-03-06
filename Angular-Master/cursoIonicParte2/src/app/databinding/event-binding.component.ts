import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output()
  apachado = new EventEmitter<string>();

  onClicked(){
    this.apachado.emit('It Works!');
    this.articulosDescargados.emit(false);
  }

  @Output("descargados")
  articulosDescargados = new EventEmitter<boolean>();



}
