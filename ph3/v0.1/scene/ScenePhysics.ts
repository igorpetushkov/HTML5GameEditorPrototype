import * as _ from 'lodash';

import { PhGame } from '../../lib/phaser';
import { Game } from '../Game';
// import { PhysicsStorage } from '../../storage/PhysicsStorage';
import { Storage } from '../../storage/Storage';

export class Physics {
    // private _storage: PhysicsStorage;

    constructor(model: Game.Model) {
        // const physicsStorageURI = Storage.Helper.formatUrl('kroppli-physics', _.get<string>(model, 'storages.physics'));

        // if (physicsStorageURI) {
        // this._storage = new PhysicsStorage({ key: physicsStorageURI });
        // }

    }

    public async init(callback: Function, data: Storage.Model[]): Promise<boolean> {
        // debugger;
        // await this._storage.init(this.change);

        return true;
    }

    public fire(): void {
        let objects = Game.ph().world.getAll({ typeobject: 'sprite' }) as PhGame.ObjectItem[];

        Game.ph().physics.collideTwoObject(objects[0], objects[1]);
    }
}