
import { Jugador } from "../Clases/Jugador";

export interface Imedico{

    diacnostico(futbolista:Jugador):void;
    cobrarSueldo():void;
}

