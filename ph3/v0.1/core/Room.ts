import { Game } from '../Game';
import { PoolItem } from '../pool/PoolItem';
import { Storage } from '../../storage/Storage';
import { Physics } from '../physics/Physics';

export class Room {
    private _physics: Physics;

    constructor(model: Game.Model) {
        this._physics = new Physics(model);
    }

    public async init(data?: Storage.Model[]): Promise<boolean> {
        // await this._physics.init(this.update, data);

        return true;
    }

    public create() {
        return true;
    }

    public validate(items: PoolItem[]) {
        return true;
    }

    public update(items: PoolItem[], deep, validate) {
        return true;
    }

    public update(data?: Storage.Model[], deep, validate) {
        return this._pool.update(data, deep, validate);
    }

    public async sync(items: PoolItem[], syncStorage): Promise<boolean> {
        return true;
    }
}