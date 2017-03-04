"use strict";
/**
 * Created by JoséPablo on 03/03/17.
 */
var camion = (function () {
    function camion() {
    }
    camion.prototype.crearCamion = function () {
        var c = new camion();
        c.color = "rojo";
        return c;
    };
    return camion;
}());
exports.camion = camion;
//# sourceMappingURL=camion.js.map