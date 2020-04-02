"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directivo = void 0;
var Persona_1 = require("./Persona");
var Directivo = /** @class */ (function (_super) {
    __extends(Directivo, _super);
    function Directivo(nom, ci, tel, dir, alt, peso, edad, numacciones) {
        var _this = _super.call(this, nom, ci, tel, dir, alt, peso, edad) || this;
        _this.numeroAcciones = numacciones;
        return _this;
    }
    Directivo.prototype.addAcciones = function (acciones) {
        this.numeroAcciones += acciones;
        console.log("Muchas gracias " + this.nombre + ", tus acciones han sido agregadas satisfactoriamente");
    };
    Directivo.prototype.rmAcciones = function (acciones) {
        this.numeroAcciones -= acciones;
        console.log("Muchas gracias " + this.nombre + " tus acciones se removieron satisfactoriamente");
    };
    return Directivo;
}(Persona_1.Persona));
exports.Directivo = Directivo;
