import { Directivo } from "./Directivo";

class name extends Directivo 
{

    protected patrimonio:Array<string>;

    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number, numacciones:number, patrimonio:Array<string>) 
    {
        super(nom, ci, tel, dir, alt, peso, edad, numacciones);
        this.patrimonio = patrimonio;    
    }

    protected addPatrimonio(patrimonio:string):void
    {
        this.patrimonio.push(patrimonio);
    }
}