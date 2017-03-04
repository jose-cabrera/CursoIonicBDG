import {demoInterface} from "./demoInterface";
/**
 * Created by edwar on 03/03/2017.
 */
class demo implements demoInterface{
    velocidad: number;
    listener:demoInterface;

    constructor(listener:demoInterface){

        this.listener = listener;
    }

    acelerar() {

    }

    frenar() {
    }

}