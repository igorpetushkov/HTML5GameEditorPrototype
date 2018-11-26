import { Ph } from '../../ph';

export default class BufferCore {
    constructor() {
        this._items = {};
        this._selected = [];
    }

    create(data) {
        if (!data || !data.length) {
            // error: data not found
            return;
        }

        data.forEach(it => this._createOne(it));

        return this.values();
    }

    _createOne(data) {
        const key = data.key;

        if (this._items[key]) {
            // error: key already existed
            return;
        }

        this._items[key] = data;

        // if (!~this._selected.indexOf(key)) {
        //     this._selected.push(key);
        // }
    }

    select(keys) {
        if (!keys || !keys.length) {
            // error: keys not found
        }

        if (keys.length === 1 && keys[0] === '*') {
            this._selected = Object.keys(this._items);

            return this.values();
        }

        return this.find(keys.map(key => ({ key })));
    }

    unselect(keys) {
        if (!keys || !keys.length) {
            // error: keys not found
        }

        this._selected = _.difference(this._selected, keys);
    }

    unselectAll() {
        this._selected = [];
    }

    update(data) {
        if (!data || !data.length) {
            // error: data not found
            return;
        }

        data.forEach(dt => {
            if (!dt.key) {
                this._selected.forEach(key => {
                    this._updateOne({ ...dt, key });
                });
            } else {
                this._updateOne(dt);
            }
        });

        return this.values();
    }

    _updateOne(data) {
        const key = data.key;

        if (!this._items[key]) {
            // error: key not found
            return;
        }

        if (this._items[key] instanceof Ph) {
            this._items[key].update(data);
        } else {
            this._items[key] = {...this._items[key], ...data};    
        }

        this._selected.push(key);
    }

    remove(keys) {
        if (!keys || !keys.length) {
            keys = this._selected;
        }

        keys.forEach(key => {
            delete this._items[key];
        });
    }

    removeAll() {
        this._items = {};
    }

    find(queries) {
        if (!queries || !queries.length) {
            // error: query not found
            return;
        }

        queries.forEach(query => this._findOne(query));

        return this.values();
    }

    _findOne(query) {
        if (Object.keys(query).length === 1 && query.key) {
            Object.keys(this._items).forEach(key => {
                if (~key.search(query.key) && !~this._selected.indexOf(key)) {
                    this._selected.push(key);
                }
            });
        } else {
            // search by value data
        }
    }

    value(key) {
        let item = null;

        if (key) {
            item = this._items[key];
        } else {
            item = _.last(this._selected);
        }
        
        return item && item instanceof Ph ? item.value() : item;
    }

    values() {
        return this._selected.map(key => {
            const item = this._items[key];

            return item instanceof Ph ? item.value() : item;
        });
    }

    all() {
        return this._items;
    }
}