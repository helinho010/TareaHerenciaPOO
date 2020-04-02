"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nom, ci, tel, dir, alt, peso, edad) {
        this.nombre = nom;
        this.ci = ci;
        this.telefono = tel;
        this.direccionDomicilio = dir;
        this.altura = alt;
        this.peso = peso;
        this.edad = edad;
    }
    Persona.prototype.caminar = function () {
        console.log("Estoy caminando");
    };
    return Persona;
}());
exports.Persona = Persona;
