import * as _ from 'lodash';

import { Game } from '../Game';
import { GameAsset } from './GameAsset';
import { DataStorage } from '../../storage/DataStorage';
import { Assets } from './Assets';

export class ImageAsset extends GameAsset {
    public static build(key, model: DataStorage.ImageAssetModel & any, addToPool): ImageAsset {
        _.assign(model, { key, typeclass: 'asset', typeasset: 'image' });

        const item = new ImageAsset(model);

        if (addToPool) {
            Game.getPool().addItem(item);
        }

        item.init().dirty(false);

        return item;
    }

    public static select(key): ImageAsset {
        return Assets.select(key, 'image');
    }

    public static async load(key): Promise<boolean> {
        return await Assets.select(key, 'image').load();
    }

    public static async loadAll(): Promise<boolean> {
        return await Assets.load('image');
    }

    private constructor(model: DataStorage.ImageAssetModel) {
        super(model);
    }
}