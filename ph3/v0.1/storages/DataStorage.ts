import * as _ from 'lodash';

import { PhPoint } from '../lib/phaser';
import { Storage } from './Storage';
import { PoolItem } from '../game/pool/PoolItem';

export namespace DataStorage {
    export interface ObjectModel extends Storage.Model {
        typeobject;
        width;
        height;
        position: PhPoint;
        anchor: PhPoint;
        scale;
        rotate;
        hidden;
        scene;
        layer;
        group;
        tags[];
    }

    export interface ImageObjectModel extends ObjectModel {
        asset;
    }

    export interface SpriteObjectModel extends ObjectModel {
        asset;
    }

    export interface AssetModel extends Storage.Model {
        typeasset;
        url;
    }

    export interface ImageAssetModel extends AssetModel { }


    export interface GroupModel extends Storage.Model {
        typegroup;
        position;
        anchor: PhPoint;
        scale;
        rotate;
        scene;
        items[];
        hidden;
        debug;
    }

    export interface LayerModel extends GroupModel { }

    export interface TagModel extends GroupModel { }

    // export interface Violation {
    //     message;
    // }
}

export class DataStorage extends Storage {
    public async findAllModels(): Promise<Storage.Model[]> {
        return [];
    }

    public async findModelByNames(...names[]): Promise<Storage.Model[]> {
        return null;
    }

    public async findModelByIds(...ids[]): Promise<Storage.Model[]> {
        return null;
    }

    public async validate(data: Storage.Model[]): Promise<boolean> {
        return true;
    }

    public async sync(items?: PoolItem[], deep, validate): Promise<boolean> {
        const data = _.map(items, 'model') as Storage.Model[];
        const links = deep ? _.invokeMap(items, 'getLinks') : [];
        // TODO apply flatten
        const list = [].concat(data, links);

        if (validate && await !this.validate(list)) {
            throw 'error: validation: DataStorage.sync';
        }

        return await this.putModels(list);
    }
}