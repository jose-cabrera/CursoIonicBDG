/**
 * Created by j5zunig on 3/3/17.
 */

import {demoInterface} from "./demoInterface";

class demo implements demoInterface {
    acelerar() {
        // acelerar
    }

    get getVelocidad() : number {
        return this.listener.velocidad;
    }

    franar() {
        // frenar
        let d: demoInterface = JSON.parse("{string}");
        let objeto:demo = new demo(d);
    }
}