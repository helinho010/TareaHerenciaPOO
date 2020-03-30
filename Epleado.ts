import { Persona } from "./Persona";
export class Empleado extends Persona 
{
    public antiguedad:number;
    protected sueldo:number;
    protected numeroDeContrato:string;

    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number, aniosantiguedad:number, sueldo:number, numCont:string)
    {
        super(nom, ci, tel, dir, alt, peso, edad);
        this.antiguedad = aniosantiguedad;
        this.sueldo = sueldo;
        this.numeroDeContrato = numCont;
    }

    protected cobrarSueldo():void
    {
        console.log(`Se le pago el monto de dinero: ${this.sueldo} a titular de la cuenta: ${this.nombre}, muchas gracias y que tenga un buen dia`);
    }

    public addAnioAntiguedad(anio:number):void
    {
        this.antiguedad += anio; 
    }
    
}