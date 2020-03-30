import { Persona } from "./Persona";

export class Directivo extends Persona
{
    protected numeroAcciones:number;
    
    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number, numacciones:number) 
    {
      super(nom, ci, tel, dir, alt, peso, edad);
      this.numeroAcciones = numacciones;
    }

    protected addAcciones( acciones:number):void
    {
        this.numeroAcciones += acciones;
        console.log(`Muchas gracias ${this.nombre}, tus acciones han sido agregadas satisfactoriamente`);
    }

    protected rmAcciones(acciones:number):void
    {
        this.numeroAcciones -= acciones;
        console.log(`Muchas gracias ${this.nombre} tus acciones se removieron satisfactoriamente`);
    }
}

