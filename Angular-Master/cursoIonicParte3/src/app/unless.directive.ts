import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input() set unless(condition:boolean) {
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  //what and where
  //que es lo que vamos a cambiar private templateRef:TemplateRef<any>
  //en donde lo vamos a cambier private vcRef:ViewContainerRef

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) {
  }

}
