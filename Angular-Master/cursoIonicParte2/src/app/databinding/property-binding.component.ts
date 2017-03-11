import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    {{result}}
  <p>{{hombre}}</p>
  <p>{{nombre}}</p>
  `,
  styles: []
})
export class PropertyBindingComponent {

  @Input()
  public result: number;

  @Input()
  public hombre: number;

  @Input()
  public nombre:any;

}
