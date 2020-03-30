export class Persona
{
    public nombre: string;
    public ci:string;
    public telefono:string;
    public direccionDomicilio:string;
    public altura:number;
    public peso:number;
    public edad:number;
    
    constructor(nom:string, ci:string, tel:string, dir:string, alt:number, peso:number, edad:number)
    {
        this.nombre=nom;
        this.ci=ci;
        this.telefono=tel;
        this.direccionDomicilio=dir;
        this.altura=alt;
        this.peso=peso;
        this.edad=edad;
    }

    public caminar():void
    {
        console.log("Estoy caminando");
    }
}
