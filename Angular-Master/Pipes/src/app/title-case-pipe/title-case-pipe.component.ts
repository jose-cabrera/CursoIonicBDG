import {Component} from '@angular/core';

@Component({
  selector: 'title-case-pipe',
  template: `<div>
    <p>{{str}} (no format)</p>
    <p>{{str | titlecase}} (with format)</p>
  </div>`
})
export class TitleCasePipeComponent {

  str = "hola mundo! soy un titulo";

}
