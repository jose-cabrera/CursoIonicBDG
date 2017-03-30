import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  //TODO: Listening to Events
=======
  // //TODO: Listening to Events
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
=======
  // //TODO: Listening to Events
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
  @HostListener('mouseenter')
  mouseover() {
    // this.backgroundColor = "green";
    this.backgroundColor = this.highlightColor;
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
  //
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
=======
  //
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
  @HostListener('mouseleave')
  mouseleave() {
    // this.backgroundColor = "white";
    this.backgroundColor = this.defaultColor;
  }

<<<<<<< HEAD
<<<<<<< HEAD
  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Event Target" + event.target);
  }


  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input()
  defaultColor:string = "white";

  @Input("highlight")
  highlightColor:string = "green";

  // private backgroundColor = this.defaultColor;
  private backgroundColor:string;

// constructor(private elementRef : ElementRef, private renderer : Renderer) {
  constructor() {

    // Changing attributes, the bad way
    // this.elementRef.nativeElement.style.backgroundColor = "green";
    // Changing attibutes, the correct way
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');

=======
=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
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

  constructor() {
<<<<<<< HEAD
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
