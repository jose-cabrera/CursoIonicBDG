import {demoInterface} from "./demoInterface";
/**
 * Created by JoséPablo on 03/03/17.
 */

class demo {


    listener:demoInterface;

    constructor(listener:demoInterface) {
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
        let d:demoInterface = JSON.parse("{string}")
        let objeto:demo = new demo(d);

    }

}