"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by lgutierrez on 3/03/2017.
 */
var camion_1 = require("./camion");
var bmw = (function (_super) {
    __extends(bmw, _super);
    function bmw() {
        _super.apply(this, arguments);
    }
    return bmw;
}(camion_1.camion));
exports.bmw = bmw;