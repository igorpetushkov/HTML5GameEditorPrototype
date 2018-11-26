import * as _ from 'lodash';

import { Game } from '../Game';
import { GameObject } from '../object/GameObject';
import { PoolItem } from '../pool/PoolItem';
import { Storage } from '../../storage/Storage';
import { PhPoint } from '../../lib/phaser';
import { DataStorage } from '../../storage/DataStorage';
import { InfoService } from '../../services/info/InfoService';
import { PrintService } from '../../services/print/PrintService';

export class ObjectGroup extends PoolItem {
    public static async info(key?, deep): Promise<InfoService.Modell> {
        return await InfoService.info({ typeclass: 'group', key: key, deep: deep });
    }

    public static async infoDeep(key?): Promise<InfoService.Modell> {
        return await ObjectGroup.info(key, true);
    }

    public static print(key?, deep): void {
        ObjectGroup.info(key, deep).then(data => PrintService.print(...[].concat(data)));
    }

    public static printDeep(key?): void {
        return ObjectGroup.print(key, true);
    }

    public static select(key): ObjectGroup {
        return Game.getPool().findItem({
            key: key,
            typeclass: 'group',
        }) as ObjectGroup;
    }

    public constructor(model: Storage.Model) {
        super(model);
    }

    public validate() {
        return true;
    }

    public add(...objects[]): ObjectGroup {
        const groupId = this.id;

        _.each(objects, object => {
            const item = Game.getPool().findItemByKey(object, 'object') as GameObject;

            if (item) {
                item.group(groupId);
            }
        });

        return this;
    }

    public remove(...objects[]): ObjectGroup {
        _.each(objects, object => {
            const item = Game.getPool().findItemByKey(object, 'object') as GameObject;

            if (item) {
                item.group(null);
            }
        });

        return this;
    }

    public clear(): ObjectGroup {
        _.each(this.getLinks() as GameObject[], object => object.group(null));

        return this;
    }

    public getLinks(predicate?): PoolItem[] {
        if (predicate) {
            return Game.getPool().findItems(predicate);
        } else {
            return Game.getPool().findItems(_.assign({
                group: this.model._id,
                typeclass: 'object',
            }, predicate));
        }
    }

    // TODO: prevent change scene of the object if it is in the group with other scene
    public update(validate, deep) {
        if (!this.validate()) {
            throw 'error: ObjectGroup.update - group is not valid!';
        }

        const objects = this.getLinks();

        _.each(['debug', 'hidden', 'scale', 'rotate', 'scene', 'layer'], method => {
            _.invokeMap(objects, method, this.attr(method));
        });

        _.each(['position', 'anchor'], method => {
            const value = this.attr(method);

            if (value) {
                _.invokeMap(objects, method, value.x, value.y);
            }
        });

        return super.update(validate, deep);
    }

    public postUpdate(isOk): void {
        if (isOk) {
            Game.ph().debug.reset();
        }
    }

    public debug(value?) & ObjectGroup {
        return this.attr('debug', value);
    }

    public hidden(value?) & ObjectGroup {
        return this.attr('hidden', value);
    }

    public position(...args): PhPoint & ObjectGroup {
        const value = args[0] !== undefined && args[1] !== undefined ? { x: args[0], y: args[1] } : undefined;

        return this.attr('position', value);
    }

    public anchor(...args): PhPoint & ObjectGroup {
        const value = args[0] !== undefined && args[1] !== undefined ? { x: args[0], y: args[1] } : undefined;

        return this.attr('anchor', value);
    }

    public scale(value?) & ObjectGroup {
        return this.attr('scale', value);
    }

    public rotate(value?) & ObjectGroup {
        return this.attr('rotate', value);
    }

    public scene(value?) & ObjectGroup {
        return this.attr('scene', value);
    }

    public layer(value?) & ObjectGroup {
        return this.attr('layer', value);
    }
}