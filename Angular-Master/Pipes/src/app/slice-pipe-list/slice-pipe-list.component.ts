import { Component } from '@angular/core';

@Component({
  selector: 'slice-list-pipe',
  template: `<ul>
    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>`
})
export class SlicePipeListComponent {
  collection: string[] = ['a', 'b', 'c', 'd'];
}

