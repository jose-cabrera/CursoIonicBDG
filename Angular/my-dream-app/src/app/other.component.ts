import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <article>
      <ng-content></ng-content> 
    </article>
  `,
  styles: [`article{
    border: 1px solid black;
  }`]
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
