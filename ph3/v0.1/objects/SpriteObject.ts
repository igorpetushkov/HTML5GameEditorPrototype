import * as _ from 'lodash';

import { Game } from '../Game';
import { GameObject } from './GameObject';
import { DataStorage } from '../../storage/DataStorage';

export class SpriteObject extends GameObject {
    public static select(key): SpriteObject {
        return Game.getPool().findItem({
            key: key,
            typeclass: 'object',
            typeobject: 'sprite',
        }) as SpriteObject;
    }

    public constructor(model: DataStorage.SpriteObjectModel) {
        super(model);
    }

    public validate() {
        return true;
    }

    public asset(value?) & SpriteObject {
        return this.attr('asset', value);
    }

    public update_(phfunc: Function): void {
        // debugger;
        phfunc();
    }

    public render_(): void {
        // debugger;
    }
}