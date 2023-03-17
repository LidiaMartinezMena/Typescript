export class Telefono {
    constructor(a, b) {
        this._tipo = a;
        this._numero = b;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
}
