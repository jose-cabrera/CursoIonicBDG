import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

<<<<<<< HEAD
<<<<<<< HEAD
  @Input() set unless(condition:boolean) {
    if(!condition){
=======
=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
  private bandera:boolean;

  @Input() set unless(condition:boolean) {
    this.bandera = condition;
    this.cambiar();
  }

  cambiar(){
    if(!this.bandera){
<<<<<<< HEAD
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
  //what and where

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) {
  }

}
