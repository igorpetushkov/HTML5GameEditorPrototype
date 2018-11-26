import * as _ from 'lodash';

import { PhGame } from './PhGame';

export class PhWorld {
    private _world: Phaser.World;

    constructor(world: Phaser.World) {
        this._world = world;
    }

    public add(item: PhGame.Item): void {
        this._world.add(item);
    }

    public remove(item: PhGame.Item): void {
        this._world.remove(item);
    }

    public clear(): void {
        this._world.removeAll(true);
    }

    public getAll(predicate?): PhGame.Item[] {
        const items = [];

        this._world.forEach(item => items.push(item), this);

        return _.filter(items, predicate);
    }
}