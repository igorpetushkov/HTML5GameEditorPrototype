import * as _ from 'lodash';

import { Game } from '../Game';
import { GameObject } from './GameObject';
import { DataStorage } from '../../storage/DataStorage';

export class ImageObject extends GameObject {
    public static select(key): ImageObject {
        return Game.getPool().findItem({
            key: key,
            typeclass: 'object',
            typeobject: 'image',
        }) as ImageObject;
    }

    public constructor(model: DataStorage.ImageObjectModel) {
        super(model);
    }

    public validate() {
        return true;
    }

    public asset(value?) & ImageObject {
        return this.attr('asset', value);
    }

    public update_(phfunc: Function): void {
        phfunc();
    }

    public render_(): void {
        // debugger;
    }
}