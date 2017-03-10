import { Component, OnInit } from '@angular/core';

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
export class ChildViewsComponent implements ngAfterViewInit{
  bindable = "Im a bindable text";

  @ViewChild('boundParagraph')
  boundParagraph:HTMLElement;

  @ChildContent('boundContent')
  boundContent:HTMLElement;

  ngAfterViewInit(){
    console.log(this.boundParagraph);
  }
}
