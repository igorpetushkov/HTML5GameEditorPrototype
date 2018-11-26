import * as _ from 'lodash';

import { PhAsset } from '../../lib/phaser';
import { PoolItem } from '../pool/PoolItem';
import { DataStorage } from '../../storage/DataStorage';

export abstract class GameAsset extends PoolItem {
    public typeasset(value?) & GameAsset {
        return this.attr('typeasset', value);
    }

    public validate(): true {
        return true;
    }

    public getLinks(): PoolItem[] {
        return [];
    }

    public postUpdate(isOk): void { }

    public url(value?) & GameAsset {
        return this.attr('url', value);
    }

    public async load(): Promise<boolean> {
        return await this.ph<PhAsset>().load();
    }

    public async unload(): Promise<boolean> {
        return await this.ph<PhAsset>().unload();
    }

    public get loaded() {
        return  this.ph<PhAsset>().isLoaded();
    }

    public get loadError() {
        return  this.ph<PhAsset>().getLoadError();
    }

    // public async uploadAsset(id): Promise<boolean> {
    //     return true;
    // }

    // public async loadAllAssets(): Promise<boolean> {
    //     let isOk = true;

    //     for (let asset of _.values(this._items)) {
    //         isOk = _.every([isOk, await asset.load()]);
    //     }

    //     return isOk;
    // }

    // public async uploadAllAssets(): Promise<boolean> {
    //     let isOk = true;

    //     for (let asset of _.values(this._items)) {
    //         isOk = _.every([isOk, await asset.unload()]);
    //     }

    //     return isOk;
    // }
}