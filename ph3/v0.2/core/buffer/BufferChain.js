import BufferCore from './BufferCore';

export default class BufferChain {
    constructor() {
        this._core = new BufferCore();
    }

    get __core__() {
        return this._core;
    }

    create(...data) {
        this._core.create(data);

        return this;
    }

    select(...keys) {
        this.unselectAll();
        this._core.select(keys);

        return this;
    }
    
    unselect(...keys) {
        this._core.unselect(keys);

        return this;
    }

    unselectAll() {
        this._core.unselectAll();

        return this;
    }

    update(...data) {
        this._core.update(data);

        return this;
    }

    remove(...keys) {
        this._core.remove(keys);

        return this;
    }

    removeAll() {
        this._core.removeAll();

        return this;
    }

    find(...queries) {
        this.unselectAll();
        this._core.find(queries);

        return this;
    }

    value(key) {
        return this._core.value(key);
    }

    values() {
        return this._core.values();
    }

    all() {
        return this._core.all();
    }

    info() {
        return {
            
        };
    }
}