import BufferMultiple from './BufferMultiple';
import BufferSingle from './BufferSingle';

export default class Buffer {
    constructor(defaultItem) {
        this._buffer = new BufferMultiple();
        this._buffer1 = new BufferSingle(this._buffer, defaultItem);
    }

    get multiple() {
        return this._buffer;
    }

    get single() {
        return this._buffer1;
    }
}