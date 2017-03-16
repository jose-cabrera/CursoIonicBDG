import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  //TODO: Listening to Events
  @HostListener('mouseenter')
  mouseover() {
    // this.backgroundColor = "green";
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave() {
    // this.backgroundColor = "white";
    this.backgroundColor = this.defaultColor;
  }

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

  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
