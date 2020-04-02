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
exports.Jugador = void 0;
var Epleado_1 = require("../Clases/Epleado");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont, pos, numpolera, numcachos) {
        var _this = _super.call(this, nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont) || this;
        _this.posicion = pos;
        _this.numeroPolera = numpolera;
        _this.numeroCachos = numcachos;
        return _this;
    }
    Jugador.prototype.jugar = function () {
        console.log("El jugador " + this.nombre + " esta jugando en la posicion " + this.posicion);
    };
    Jugador.prototype.cabecear = function () {
        console.log("El jugador " + this.nombre + " acaba de cabecear e balon dentro del area");
    };
    return Jugador;
}(Epleado_1.Empleado));
exports.Jugador = Jugador;
