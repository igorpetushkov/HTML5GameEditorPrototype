import BufferChain from './BufferChain';

export default class BufferMultiple extends BufferChain {
    constructor() {
        super();

        this._default = null;
    }

    set default(key) {
        this._default = key;
    }

    get default() {
        return this._default;
    }

    selectDefault() {
        this.unselectAll();
        this.select(this._default);
    }

    use(key) {
        this.default = key;
        this.select(key);

        return this;
    }

    info() {
        return {
            'default' : this._default,
            ...super.info(),
        };
    }
}