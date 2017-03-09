import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>Another component</p>
  `,
  styleUrls: ['./other.component.css']
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
