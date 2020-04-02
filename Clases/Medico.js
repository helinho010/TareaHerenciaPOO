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
exports.Medico = void 0;
var Epleado_1 = require("../Clases/Epleado");
var Medico = /** @class */ (function (_super) {
    __extends(Medico, _super);
    function Medico(nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont, esp) {
        var _this = _super.call(this, nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont) || this;
        _this.especialidad = esp;
        return _this;
    }
    Medico.prototype.diacnostico = function (futbolista) {
        console.log("El jugador: " + futbolista.nombre + " esta con una lession en el tobillo derecho, reposar minimo tres meses");
    };
    return Medico;
}(Epleado_1.Empleado));
exports.Medico = Medico;
