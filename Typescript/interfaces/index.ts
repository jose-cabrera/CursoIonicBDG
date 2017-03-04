import {demoInterface} from "./demoInterface";
/**
 * Created by ENGASMOSH on 03/03/2017.
 */

class demo  implements demoInterface{

    listener: demoInterface;

    constructor(listener:demoInterface){
        this.listener = listener;
    }

    acelerar(){

    }

    fernar(){
        let d:demoInterface = JSON.parse("{string}");
        let objeto:demo = new demo(d);
    }
}
