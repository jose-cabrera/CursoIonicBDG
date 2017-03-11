import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child-views',
  template: `
    <ng-content></ng-content>
    <p #boundParagraph>
      {{bindable}}
    </p>
    <p>
        {{boundParagraph.textContent}}    
    </p>
  `,
  styles: []
})
export class ChildViewsComponent {
  bindable = "Im a bindable text";

  @ViewChild('boundParagraph')
  boundParagraph:HTMLElement;

  // @ChildContent('boundContent')
  // boundContent:HTMLElement;

}
