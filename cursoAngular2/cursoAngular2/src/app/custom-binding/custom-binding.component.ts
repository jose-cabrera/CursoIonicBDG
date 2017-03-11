import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-binding',
  templateUrl: './custom-binding.component.html',
  styleUrls: ['./custom-binding.component.css']
})
export class CustomBindingComponent {

  @Input()
  result: number = 0;

@Input()
  nombre: string = 'Julio Barqero';
}
