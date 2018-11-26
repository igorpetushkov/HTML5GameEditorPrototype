export default class BufferSingle {
    constructor(buffer, item) {
        this._buffer = buffer;

        if (item && item.key) {
            this._buffer.create(item);
            this.use(item.key);
        }
    }

    use(key) {
        this._buffer.use(key);

        return this;
    }

    update(data) {
        this._buffer.selectDefault();
        this._buffer.update(data);

        return this;
    }

    remove() {
        this._buffer.selectDefault();
        this._buffer.remove();

        return this;
    }

    value() {
        this._buffer.selectDefault();

        return this._buffer.values().pop();
    }
}