import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <article>
      <p>other component</p>
      <ng-content></ng-content>
    </article>
  `,
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
