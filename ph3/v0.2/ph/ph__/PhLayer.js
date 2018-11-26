import { PhGame } from './PhGame';

export namespace PhLayer {
    export interface Model extends PhGame.ItemModel { }
}

export class PhLayer {
    public id;

    private _game: Phaser.Game;

    constructor(game: Phaser.Game, model: PhLayer.Model) {
        this.id = model._id;
        this._game = game;
    }

    public change(model: PhLayer.Model) {
        return true;
    }
}