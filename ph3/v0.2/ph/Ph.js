export default class Ph {
    constructor(key, ph) {
        this._key = key;
        this._ph = ph;
    }

    set key(value) {
        this._key = value;
    }

    get key() {
        return this._key;
    }

    set ph(value) {
        this._ph = value;
    }

    get ph() {
        return this._ph;
    }

    update(data) {
        
    }

    data() { /* abstract */ }

}