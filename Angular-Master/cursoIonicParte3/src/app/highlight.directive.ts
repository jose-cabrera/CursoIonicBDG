import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  // //TODO: Listening to Events
  @HostListener('mouseenter')
  mouseover() {
    // this.backgroundColor = "green";
    this.backgroundColor = this.highlightColor;
  }

  //
  @HostListener('mouseleave')
  mouseleave() {
    // this.backgroundColor = "white";
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('class') get setColor() {
    return 'myClass';
  }

  //
  @Input('defaultColor')
  defaultColor:string = "white";
  //
  @Input('highlight')
  highlightColor:string = "green";
  //
  private backgroundColor = this.defaultColor;

<<<<<<< HEAD
  // private backgroundColor = this.defaultColor;
  private backgroundColor:string = "white";

// constructor(private elementRef : ElementRef, private renderer : Renderer) {
  //private elementRef:ElementRef agarra el elemento donde se hizo referencia
  constructor(private elementRef:ElementRef) {

    // Changing attributes, the bad way
    this.elementRef.nativeElement.style.backgroundColor = "green";
    // Changing attibutes, the correct way
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');

=======
  constructor() {
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
