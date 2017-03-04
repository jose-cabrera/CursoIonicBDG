/**
 * Created by j5zunig on 3/3/17.
 */
var demo = (function () {
    function demo() {
    }
    demo.prototype.acelerar = function () {
        // acelerar
    };
    Object.defineProperty(demo.prototype, "getVelocidad", {
        get: function () {
            return this.listener.velocidad;
        },
        enumerable: true,
        configurable: true
    });
    demo.prototype.franar = function () {
        // frenar
        var d = JSON.parse("{string}");
        var objeto = new demo(d);
    };
    return demo;
})();
//# sourceMappingURL=index.js.map