import { Persona } from "./Persona";
export class Hinchada extends Persona
{
    public esAbonado:boolean;
    public numeroPartidosAsistido:number;
    private aporteVoluntario:number;

    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number, abono:boolean, partidoasistidos:number, aporte:number) 
    {
        super(nom, ci, tel, dir, alt, peso, edad);
        this.esAbonado= abono;
        this.numeroPartidosAsistido = partidoasistidos;
        this.aporteVoluntario = aporte;    
    }

    public depositoVoluntario(monto:number):string
    {
        let depositoVoluntario:Array<number>;
        depositoVoluntario.push(monto);
        return `El monto ${monto} se deposito satisfactoriamente, muhcas gracias ${this.nombre}`;
    }
}
