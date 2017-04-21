import { Component } from '@angular/core';

@Component({
  selector: 'percent-pipe',
  template: `<div>
    <p>A: {{a | percent}}</p>
    <p>B: {{b | percent:'4.3-5'}}</p>
  </div>`
})
export class PercentPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
}
