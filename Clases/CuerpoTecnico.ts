import { Empleado } from "./Epleado";

export class CuerpoTecnico extends Empleado 
{

    public cargo:string;     
    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number, aniosantiguedad:number, sueldo:number, numCont:string, car:string) 
    {
        super(nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont);
        this.cargo = car;
    }

    public estrategia():void
    {
        console.log("El equipo esta jugando con una alineacion de 4-4-2");
    }
}