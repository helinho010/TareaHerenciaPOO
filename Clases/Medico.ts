import { Empleado } from "../Clases/Epleado";
import { Jugador } from "../Clases/Jugador";
import { Imedico } from "../Interface/Imedico";


export class Medico extends Empleado implements Imedico
{
    public especialidad:string;

    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number, aniosantiguedad:number, sueldo:number, numCont:string, esp:string) 
    {
        super(nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont);
        this.especialidad = esp;
    }

    diacnostico(futbolista:Jugador):void
    {   
      console.log(`El jugador: ${futbolista.nombre} esta con una lession en el tobillo derecho, reposar minimo tres meses`);
    }
}