import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  variable = true;

  getClass(){
    return {
      'myClass' : this.variable
    }
  }

  color:string = "black";

  getStyle(){
    return  {
      'background-color' : this.color
    }
  }

  //*ngIf
  private switch : boolean = true;

  onSwitch(){
    this.switch = !this.switch;
  }

  //*ngFor

  private items = [1,2,3,4,5,6,7,8];

  //ngSwith
  value : number = 20;

}
