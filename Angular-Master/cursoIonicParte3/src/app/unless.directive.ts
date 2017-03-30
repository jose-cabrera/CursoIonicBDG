import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  private bandera:boolean;

  @Input() set unless(condition:boolean) {
    this.bandera = condition;
    this.cambiar();
  }

  cambiar(){
    if(!this.bandera){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  //what and where

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) {
  }

}
