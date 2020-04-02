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
exports.Hinchada = void 0;
var Persona_1 = require("./Persona");
var Hinchada = /** @class */ (function (_super) {
    __extends(Hinchada, _super);
    function Hinchada(nom, ci, tel, dir, alt, peso, edad, abono, partidoasistidos, aporte) {
        var _this = _super.call(this, nom, ci, tel, dir, alt, peso, edad) || this;
        _this.esAbonado = abono;
        _this.numeroPartidosAsistido = partidoasistidos;
        _this.aporteVoluntario = aporte;
        return _this;
    }
    Hinchada.prototype.depositoVoluntario = function (monto) {
        this.aporteVoluntario.push(monto);
        return "El monto " + monto + " se deposito satisfactoriamente, muhcas gracias " + this.nombre;
    };
    return Hinchada;
}(Persona_1.Persona));
exports.Hinchada = Hinchada;
