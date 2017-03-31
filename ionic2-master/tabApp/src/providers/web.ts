import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Web provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Web {

  data:any;

  constructor(public http:Http) {
    console.log('Hello Web Provider');
  }

  load() {

    // if (this.data) {
    //   // console.log("Tipos descargados anteriormente");
    //   return Promise.resolve(this.data);
    // }
    return new Promise(resolve => {
      // console.log("Consumiendo servicio de tipos ubicaciones");
      this.http.get("https://api.github.com/users/jose-cabrera")
        .map(res => res.json())
        .subscribe(data => {
          // console.log("SERVICIO CONSUMIDO: " + JSON.stringify(data));
          this.data = data;
          console.log(this.data);
          resolve(this.data);
        });
    });
  }

}
