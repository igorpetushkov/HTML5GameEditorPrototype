import * as _ from 'lodash';

import { Game } from '../../game/Game';
import { PoolItem } from '../pool/PoolItem';
import { DataStorage } from '../../storage/DataStorage';
import { InfoService } from '../../services/info/InfoService';
import { PrintService } from '../../services/print/PrintService';
import { GameObject } from '../object/GameObject';
import { ObjectGroup } from '../group/ObjectGroup';


export class Layer extends PoolItem {
    public static async info(key?, deep): Promise<InfoService.Modell> {
        return await InfoService.info({ typeclass: 'layer', key: key, deep: deep });
    }

    public static async infoDeep(key?): Promise<InfoService.Modell> {
        return await Layer.info(key, true);
    }

    public static print(key?, deep): void {
        Layer.info(key, deep).then(data => PrintService.print(...[].concat(data)));
    }

    public static printDeep(key?): void {
        return Layer.print(key, true);
    }

    public static select(key): Layer {
        return Game.getPool().findItem({
            typeclass: 'layer',
            key: key,
        }) as Layer;
    }

    public constructor(model: DataStorage.LayerModel) {
        super(model);
    }

    public validate() {
        return true;
    }

    public getLinks(predicate?): PoolItem[] {
        if (predicate) {
            return Game.getPool().findItems(predicate)
        } else {
            return Game.getPool().findItems(_.assign({
                layer: this.model._id,
                typeclass: 'object',
            }, predicate));
        }
    }

    public add(...objects[]): Layer {
        const groupId = this.id;

        _.each(objects, object => {
            const item = Game.getPool().findItemByKey(object, 'object') as GameObject;

            if (item) {
                item.group(groupId);
            }
        });

        return this;
    }

    public remove(...objects[]): Layer {
        _.each(objects, object => {
            const item = Game.getPool().findItemByKey(object, 'object') as GameObject;

            if (item) {
                item.group(null);
            }
        });

        return this;
    }

    public clear(): Layer {
        _.each(this.getLinks() as GameObject[], object => object.group(null));

        return this;
    }

    public postUpdate(isOk): void {
        if (isOk) {
            Game.ph().debug.reset();
        }
    }

    public scene(value?) & Layer {
        return this.attr('scene', value);
    }

    public debug(value?) & Layer {
        return this.attr('debug', value);
    }

    public hidden(value?) & Layer {
        return this.attr('hidden', value);
    }
}