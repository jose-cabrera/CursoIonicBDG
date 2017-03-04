import {demointerface} from "./demointerface";
/**
 * Created by JoséPablo on 03/03/17.
 */

class demo {


   listener:demointerface;

   constructor(listener:demointerface) {
        this.listener = listener;
    }

   acelar() {
        // acelerar
        this.listener.velocidad++;
    }

   getVelocidad():number {
        return this.listener.velocidad;
    }

   frena() {
        //
        let d:demointerface = JSON.parse("{string}")
        let objeto:demo = new demo(d);

   }

}