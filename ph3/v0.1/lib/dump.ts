import * as _ from 'lodash';

import { Game } from '../../game/Game';
import { PoolItem } from '../../game/pool/PoolItem';

import { UUID } from '../../lib/uuid';
import { Storage } from '../../storage/Storage';

export namespace InfoService {
    export interface Options {
        typeclass;
        typeobject?;
        typeasset?;
        typegroup?;
        key?;
        deep?;
    }

    export interface Model extends Storage.Model {
        links?: InfoService.Model[];
        typeobject?;
        typeasset?;
        scene?;
        layer?;
        object?;
        asset?;
    }

    export type Modell = Model | Model[];
}

export class InfoService {
    public static async info(options: InfoService.Options): Promise<InfoService.Modell> {
        // TODO: refactor this and add getDeepLink to PoolItem
        function toInfoR(item: PoolItem) {
            const info = InfoService.toInfo(item, true);

            if (options.deep) {
                const links = item.getLinks();

                if (links.length) {
                    info.links = _.map(links, toInfoR);
                }
            }

            return info;
        }

        const items = Game.getPool().findItems(_.omit(options, 'deep')) as PoolItem[];
        const info = _.map(items, toInfoR) as InfoService.Model[];

        return options.key ? _.head(info) : info;
    }

    public static toInfo(item: PoolItem, footprint): InfoService.Model {
        function formatItemIds(model: Storage.Model, key) {
            if (model[key]) {
                if (_.isArray(model[key])) {
                    model[key] = _.reduce(model[key], (all, id) => {
                        const { itemKey, iDfoot } = processItemId(id);

                        all.push(itemKey + '|' + iDfoot);

                        return all;
                    }, []);
                } else {
                    const { itemKey, iDfoot } = processItemId(model[key]);

                    model[key] = itemKey + '|' + iDfoot;
                }
            }
        }

        function processItemId(id): { itemKey, iDfoot } {
            const itemKey = Game.getPool().formatItemIdToKey(id);
            const iDfoot = UUID.footprint(id);

            return { itemKey, iDfoot };
        }

        const infoData = _.assign({}, item.model, {
            dirty: item.isDirty(),
            synced: item.isSynced(),
        }) as InfoService.Model;

        infoData._id = UUID.footprint(infoData._id);

        _.each(['scene', 'layer', 'object', 'asset', 'items', 'tags'], formatItemIds.bind(null, infoData));

        return infoData;
    }

}