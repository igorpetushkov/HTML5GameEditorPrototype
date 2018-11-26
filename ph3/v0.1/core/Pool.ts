import * as _ from 'lodash';

import { Storage } from '../../storage/Storage';
import { PoolItem } from './PoolItem';

import { Scene } from '../scene/Scene';
import { Layer } from '../layer/Layer';
import { ImageObject } from '../object/ImageObject';
import { SpriteObject } from '../object/SpriteObject';
import { ImageAsset } from '../asset/ImageAsset';

export class Pool {
    private _items: { [id]: PoolItem };

    constructor() {
        this._items = {};
    }

    public async /* fill? */ init(data: Storage.Model[]): Promise<void> {
        const typeclass = {
            scene: Scene,
            layer: Layer,
            object: {
                image: ImageObject,
                sprite: SpriteObject,
            },
            asset: {
                image: ImageAsset,
            },
        };

        for (let model of data) {
            let builder = null;

            const attrs = [model.typeclass];

            if (model.typeclass === 'object') {
                attrs.push(model['typeobject']);
            } else if (model.typeclass === 'asset') {
                attrs.push(model['typeasset']);
            }

            builder = _.get(typeclass, attrs);
            builder.build(model.key, model);
        }
    }

    public validate(items: PoolItem[]) {
        return true;
    }

    public async r_validate(items: PoolItem[]): Promise<boolean> {
        return true;
    }

    public async validate_r(items: PoolItem[]): Promise<boolean> {
        return true;
    }


    public ph_update(): void {}

    public fph_update(): void {}

    public rt_update(): void {}

    public frt_update(): void {}

    public update(data: Storage.Model[] | PoolItem[], validate, deep) {
        let list = [];

        if (data && data.length) {
            if (data[0] instanceof PoolItem) {
                list = data;
            } else {
                const items = _.map(data as Storage.Model[], (model) => {
                    return this.findItemById(model._id);
                });

                list = items;
            }
        } else {
            // TODO: refactor
            throw 'refactor update without args';

            // let scenes = this.findItemsByTypeclass('scene');
            // scenes = _.sortBy(scenes, 'active');

            // list = scenes;
        }

        if (deep) {
            // TODO implement deep links
            const links = _.reduce(list, (all, item) => {
                all = all.concat(item.getLinks());

                return all;
            }, []);

            list = list.concat(links);
        }

        if (validate && !this.validate(list)) {
            throw 'error: validation: Pool.update';
        }

        _.invokeMap(list, 'update', false, false);

        return true;
    }

    public addItem(item: PoolItem): void {
        this._items[item.id] = item;
    }

    public getAllItems(): PoolItem[] {
        return _.values(this._items);
    }

    public findItems(predicate): PoolItem[] {
        predicate = _.omitBy(predicate, (value, key) => !value);

        return _(this._items)
            .values()
            .map('model')
            .filter(predicate)
            .map('_id')
            .map((id) => this._items[id])
            .value();
    }
    public async rfindItems(): Promise<void> {}

    public findItem(predicate): PoolItem {
        return _.head(this.findItems(predicate));
    }

    public findItemById(id): PoolItem {
        return this._items[id];
    }

    public findDirtyItems(predicate): PoolItem[] {
        return _.filter(this.findItems(predicate), { dirty: true });
    }

    public findUnsycnedItems(predicate): PoolItem[] {
        return _.filter(this.findItems(predicate), { synced: false });
    }

    public findItemByKey(key, typeclass): PoolItem {
        for (let item of _.values(this._items)) {
            if (item.attr('key') === key && item.model.typeclass === typeclass) {
                return item;
            }
        }
    }

    public findItemsByKey(keys[], typeclass): PoolItem[] {
        return _.reduce(keys, (all, key) => {
            const item = this.findItemByKey(key, typeclass);

            if (item) {
                all.push(item);
            }

            return all;
        }, []);
    }

    public findItemIDByKey(key, typeclass) {
        const item = this.findItemByKey(key, typeclass);

        return _.get(item, 'id');
    }

    public findItemsByTypeclass(typeclass): PoolItem[] {
        return _.reduce(this._items, (all, item) => {
            if (item.typeclass === typeclass) {
                all.push(item);
            }

            return all;
        }, []);
    }

    public deleteItem(id): void {
        _.unset(this._items, id);
    }

    public formatItemIdToKey(id) {
        return _.get(this.findItemById(id), 'model.key');
    }

    public formatItemKeyToId(key, typeclass) {
        return _.get(this.findItemByKey(key, typeclass), 'model.id');
    }
}