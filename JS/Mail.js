export class Mail {
    constructor(a, b) {
        this._tipo = a;
        this._direccion = b;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(value) {
        this._direccion = value;
    }
}
