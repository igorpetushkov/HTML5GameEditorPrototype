import * as _ from 'lodash';

import { Game } from '../Game';
import { GameAsset } from './GameAsset';

export class Assets {
    public static select(key, typeasset): GameAsset {
        return Game.getPool().findItem({
            key: key,
            typeasset: typeasset,
        }) as GameAsset;
    }

    public static async load(typeasset?): Promise<boolean> {
        const loads = [];
        const assets = Game.getPool().findItems({
            typeclass: 'asset',
            typeasset: typeasset,
        }) as GameAsset[];

        for (let asset of assets) {
            loads.push(await asset.load());
        }

        return _.every(loads);
    }
}