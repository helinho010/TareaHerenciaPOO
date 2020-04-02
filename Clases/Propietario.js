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
exports.Propietario = void 0;
var Directivo_1 = require("./Directivo");
var Propietario = /** @class */ (function (_super) {
    __extends(Propietario, _super);
    function Propietario(nom, ci, tel, dir, alt, peso, edad, numacciones, patrimonio) {
        var _this = _super.call(this, nom, ci, tel, dir, alt, peso, edad, numacciones) || this;
        _this.patrimonio = patrimonio;
        return _this;
    }
    Propietario.prototype.addPatrimonio = function (patrimonio) {
        this.patrimonio.push(patrimonio);
    };
    return Propietario;
}(Directivo_1.Directivo));
exports.Propietario = Propietario;
