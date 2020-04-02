"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medico_1 = require("./Medico");
var Jugador_1 = require("./Jugador");
var med = new Medico_1.Medico("Ramon Quintana", "10151231-EN LP", "2252513", "Villa Fatmia, calle 15 de marzo #1202", 1.74, 75, 32, 3, 3300, "1005-e1", "Medico cirujano");
var messi = new Jugador_1.Jugador("Leonel Messi", "8362926 LP", "77633453", "Villa Pabon Calle Tte. Rosendo Villa #1515", 1.64, 55, 31, 5, 10500, "10-A1", "Volante armador", 10, 39);
/*const klopp = new CuerpoTecnico("Jürgen Klopp", "1252341 LP", "252235", "Villa la merced # 1212", 1.90, 75, 52, 2, 15600, "10-B1", "Entrenador tecnico");
const wangJianlin = new Propietario("Wang Jianlin", "45125523 SC", "33352412", "Quinto anillo radial 2 #452", 1.75, 70, 45, 20, ["Estadio Santiago Bernabéu","Gyn bernabeu"]);

console.time();
console.log(":::Datos del Jugador de futbol:::");
messi.jugar();
messi.cabecear();
messi.addAnioAntiguedad(2);
messi.cobrarSueldo();
console.log();
*/
console.log(":::Datos del Medico:::");
med.diacnostico(messi);
med.addAnioAntiguedad(3);
med.cobrarSueldo();
console.log();
/*
console.log(":::Datos del Direcctor tecnico:::");
klopp.estrategia();
//klopp.cobrarSueldo();
console.log();


console.log(":::Datos del Propietario:::");
wangJianlin.addPatrimonio("Sala de masajes");
//wangJianlin.cobrarSueldo();
console.log();
*/
console.timeEnd();
