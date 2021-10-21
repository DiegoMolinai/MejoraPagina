import { Intercambio } from "./intercambio";
import { Producto } from "./producto";

export interface Usuario {

    id?:number;
    nombre:string;
    apellido:string;
    pais:string;
    ciudad:string;
    usuario?:string;
    contrasena?:string;
    intercambios?:Intercambio[];
    esadmin?:boolean;
    productos:Producto[];
}
