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

  constructor() {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
