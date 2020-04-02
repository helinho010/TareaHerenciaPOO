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
exports.Empleado = void 0;
var Persona_1 = require("./Persona");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont) {
        var _this = _super.call(this, nom, ci, tel, dir, alt, peso, edad) || this;
        _this.antiguedad = aniosantiguedad;
        _this.sueldo = sueldo;
        _this.numeroDeContrato = numCont;
        return _this;
    }
    Empleado.prototype.cobrarSueldo = function () {
        console.log("Se le pago el monto de dinero: " + this.sueldo + " a titular de la cuenta: " + this.nombre + ", muchas gracias y que tenga un buen dia");
    };
    Empleado.prototype.addAnioAntiguedad = function (anio) {
        this.antiguedad += anio;
        console.log("Se agrego mas anios de antiguedad");
    };
    return Empleado;
}(Persona_1.Persona));
exports.Empleado = Empleado;
