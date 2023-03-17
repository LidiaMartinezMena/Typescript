import { Mail } from './Mail';
import { Telefono } from './Telefono';
import { Direccion } from './Direccion';

export class Persona {
    _nombre:string;
    _apellidos:string;
    _edad:number;
    _dni: string;
    _cumpleaños: Date;
    _colorFavorito:string;
    _sexo: string;
    _direcciones: Direccion[];
    _mails: Mail[];
    _telefonos:Telefono[];
    _notas:string;

    constructor(a:string, b:string, c:number, d:string, e:Date, f:string, g:string, h:Direccion[], i:Mail[], j:Telefono[], k:string ){
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._dni = d;
        this._cumpleaños = e;
        this._colorFavorito = f;
        this._sexo = g;
        this._direcciones = h;
        this._mails = i;
        this._telefonos = j;
        this._notas = k;
    }
    public get nombre():string{
        return this._nombre;
    }
    public set nombre(value:string){
        this._nombre=value;
    }
    public get apellidos():string{
        return this._apellidos;
    }
    public set apellidos(value:string){
        this._apellidos=value;
    }
    public get edad():number{
        return this._edad;
    }
    public set edad(value:number){
        this._edad=value;
    }
    public get dni():string{
        return this._dni;
    }
    public set dni(value:string){
        this._dni=value;
    }
    public get cumpleaños():Date{
        return this._cumpleaños;
    }
    public set cumpleaños(value:Date){
        this._cumpleaños=value;
    }
    public get colorFavorito():string{
        return this._colorFavorito;
    }
    public set colorFavorito(value:string){
        this._colorFavorito=value;
    }
    public get sexo():string{
        return this._sexo;
    }
    public set sexo(value:string){
        this._sexo=value;
    }
    public get direcciones():Direccion[]{
        return this._direcciones;
    }
    public set direcciones(value:Direccion[]){
        this._direcciones=value;
    }
    public get mails():Mail[]{
        return this._mails;
    }
    public set mails(value:Mail[]){
        this._mails=value;
    }
    public get telefonos():Telefono[]{
        return this._telefonos;
    }
    public set telefonos(value:Telefono[]){
        this._telefonos=value;
    }
    public get notas():string{
        return this._notas;
    }
    public set notas(value:string){
        this._notas=value;
    }
    agregarNuevaDireccion(value:Direccion){
        this._direcciones.push(value)
    }
    agregarNuevoTelefono(value:Telefono){
        this._telefonos.push(value)
    }
    agregarNuevoMail(value:Mail){
        this._mails.push(value)
    }
}
