import { Component, ViewChild, AfterContentInit, ContentChild} from '@angular/core';

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
export class ChildViewsComponent implements AfterContentInit{
  bindable = "Im a bindable text";

  @ViewChild('boundParagraph')
  boundParagraph:HTMLElement;

  ngAfterContentInit(){
    console.log("BoundParagraph");
    console.log(this.boundParagraph);

    console.log("BoundContent");
    console.log(this.boundContent);
  }

  @ContentChild('boundContent')
  boundContent:HTMLElement;

}
