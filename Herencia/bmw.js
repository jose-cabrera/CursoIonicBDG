"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var camion_1 = require("./camion");
var bmw = (function (_super) {
    __extends(bmw, _super);
    function bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bmw;
}(camion_1.camion));
exports.bmw = bmw;
