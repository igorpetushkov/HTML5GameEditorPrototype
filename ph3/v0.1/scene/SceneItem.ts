import * as _ from 'lodash';

import { UUID } from '../../lib/uuid';
import { PhGame } from '../../lib/phaser';
import { Game } from '../Game';
import { Storage } from '../../storage/Storage';

export abstract class PoolItem {
    public abstract validate();
    public abstract getLinks(predicate?): PoolItem[];
    public abstract postUpdate(isOk): void;

    private _model: Storage.Model;
    private _ph: PhGame.Item;

    private _dirty;
    private _synced;

    constructor(model: Storage.Model) {
        this._model = { _id: UUID() } as Storage.Model;

        if (!this.validate()) {
            throw 'error: PoolItem.validate';
        }

        this._modelSetter(model);
        this.dirty(false);
    }

    public /* some physics */ init(): PhysicsItem {
        super.init();

        Game.ph().physics.add(this.ph<PhGame.ObjectItem>());

        return this;
    }

    public init(): PoolItem {
        if (!this._ph) {
            this._ph = Game.ph().buildItem(this._model);
            this._ph.destroy = () => {
                this._ph = null;
            };
        }

        return this;
    }

    public destroy(): void {
        Game.getPool().deleteItem(this._model._id);
    }

    public ph<T>(): PhGame.Item & T {
        return this._ph as PhGame.Item & T;
    }

    public get model(): Storage.Model {
        return this._model;
    }

    public attr(attrName, attrValue?) {
        if (attrValue === undefined) {
            return this._model[attrName];
        } else {
            if (_.includes(['scene', 'layer', 'object', 'tags', 'asset', 'items'], attrName)) {
                if (_.isArray(attrValue)) {
                    const _attrValue = _.reduce(attrValue, (all, value) => {
                        let _attr = attrName === 'items' ? 'object' : attrName;
                        let _value = Game.getPool().findItemIDByKey(value, _attr);

                        if (_value) {
                            all.push(_value);
                        }

                        return all;
                    }, []);

                    attrValue = _attrValue.length ? _attrValue : undefined;
                } else {
                    switch (attrName) {
                        case 'layer':
                            const layer: PoolItem = Game.getPool().findItem({
                                typeclass: attrName,
                                key: attrValue,
                                scene: this._model['scene'],
                            });

                            if (layer) {
                                attrValue = layer.id;
                            } else {
                                throw 'error: attr.layer';
                            }

                            break;
                        case 'asset':
                            const asset: PoolItem = Game.getPool().findItem({
                                typeclass: attrName,
                                url: attrValue,
                            });

                            if (asset) {
                                attrValue = asset.id;
                            } else {
                                throw 'error: attr.asset';
                            }

                            break;
                        default:
                            attrValue = Game.getPool().findItemIDByKey(attrValue, attrName);
                    }
                }
            }

            if (attrValue !== undefined && this._model[attrName] !== attrValue) {
                _.assign(this._model, { [attrName]: attrValue });

                this._dirty = true;
                this._synced = false;
            }

            return this;
        }
    }

    public get id() {
        return this.attr('_id');
    }

    public get rev() {
        return this.attr('_rev');
    }

    public get timestamp() {
        return this.attr('timestamp');
    }

    public get typeclass() {
        return this.attr('typeclass');
    }

    public dirty(dirty): PoolItem {
        this._dirty = dirty;

        return this;
    }

    public isDirty() {
        return this._dirty;
    }

    public synced(synced): PoolItem {
        this._synced = synced;

        return this;
    }

    public isSynced() {
        return this._synced;
    }

    public key(value?) & any {
        return this.attr('key', value);
    }

    public update(validate, deep) {
        if (!this.validate()) {
            throw 'error: PoolItem.update - item is not valid!';
        }

        let isOk = false;
        let dirtyLinks = [];

        if (deep) {
            dirtyLinks = this.getDirtyLinkedItems();
        }

        if (this._dirty) {
            const isValid = !validate || Game.getPool().validate([this].concat(dirtyLinks));

            if (isValid) {
                isOk = this._ph ? this._ph.change(this._model) : true;

                if (dirtyLinks.length) {
                    isOk = Game.getPool().update(dirtyLinks, false, false);
                }
            } else {
                isOk = false;
            }
        }

        this._dirty = !isOk;
        this.postUpdate(isOk);

        return isOk;
    }

    public async sync(deep): Promise<boolean> {
        /*debugger;
        let isOk;

        if (!this._synced) {
            const isOk = await Game.getStorage().sync([this], deep, true);
        }

        this._synced = isOk;

        return isOk;*/

        return true;
    }

    // TODO: deep links
    public getDirtyLinkedItems(predicate?): PoolItem[] {
        return _.filter(this.getLinks(predicate), link => link.isDirty());
    }

    // TODO: deep links
    public getUnsyncedLinkedItems(predicate?): PoolItem[] {
        return _.filter(this.getLinks(predicate), link => !link.isSynced());
    }

    private _modelSetter(model: Storage.Model): void {
        _.forIn(model, (value, key) => {
            if (_.isFunction(this[key])) {
                if (_.isArray(value)) {
                    this[key](...value);
                } else {
                    this[key](value);
                }
                // } else if (key === 'timestamp' || key === 'typeclass') {
                //     this.attr(key, value);
            } else {
                this.attr(key, value);
                // throw 'DataItem._modelSetter: log warning, key not found';
            }
        });
    }
}