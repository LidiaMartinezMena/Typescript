export class Persona {
    constructor(a, b, c, d, e, f, g, h, i, j, k) {
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
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get dni() {
        return this._dni;
    }
    set dni(value) {
        this._dni = value;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set cumpleaños(value) {
        this._cumpleaños = value;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(value) {
        this._colorFavorito = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(value) {
        this._direcciones = value;
    }
    get mails() {
        return this._mails;
    }
    set mails(value) {
        this._mails = value;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(value) {
        this._telefonos = value;
    }
    get notas() {
        return this._notas;
    }
    set notas(value) {
        this._notas = value;
    }
    agregarNuevaDireccion(value) {
        this._direcciones.push(value);
    }
    agregarNuevoTelefono(value) {
        this._telefonos.push(value);
    }
    agregarNuevoMail(value) {
        this._mails.push(value);
    }
}
