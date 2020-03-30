import { Empleado } from "./Epleado";

export class Jugador extends Empleado
{
    public posicion:string;
    public numeroPolera:number;
    public numeroCachos:number;

    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number, aniosantiguedad:number, sueldo:number, numCont:string, pos:string, numpolera:number, numcachos:number) 
    {
        super(nom, ci, tel, dir, alt, peso, edad, aniosantiguedad, sueldo, numCont);
        this.posicion = pos;
        this.numeroPolera = numpolera;
        this.numeroCachos = numcachos;
    }

    public jugar():void
    {
        console.log(`El jugador ${this.nombre} esta jugando en la posicion ${this.posicion}`);
    }

    public cabecear():void
    {
        console.log(`El jugador ${this.nombre} acaba de cabecear e balon dentro del area`);
    }
}