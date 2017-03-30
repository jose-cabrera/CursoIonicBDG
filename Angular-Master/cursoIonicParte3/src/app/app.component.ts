import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
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

<<<<<<< HEAD
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
=======
>>>>>>> 098d653e62b3d46af10233d949f8b23353dd15ee
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
