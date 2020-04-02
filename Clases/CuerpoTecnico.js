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
exports.CuerpoTecnico = void 0;
var Epleado_1 = require("./Epleado");
var CuerpoTecnico = /** @class */ (function (_super) {
    __extends(CuerpoTecnico, _super);
    function CuerpoTecnico(nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont, car) {
        var _this = _super.call(this, nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont) || this;
        _this.cargo = car;
        return _this;
    }
    CuerpoTecnico.prototype.estrategia = function () {
        console.log("El equipo esta jugando con una alineacion de 4-4-2");
    };
    return CuerpoTecnico;
}(Epleado_1.Empleado));
exports.CuerpoTecnico = CuerpoTecnico;
