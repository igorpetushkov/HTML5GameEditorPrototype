import { PhGame } from '../PhGame';

export class PhSprite extends Phaser.Sprite implements PhGame.ObjectItem {
    public id;

    private _debug;

    constructor(game: Phaser.Game, model: PhGame.ImageModel) {
        super(game, model.position.x, model.position.y, model.asset, model.frame);

        this.id = model._id;
        this._debug = model.debug;

        this.change(model);
    }

    public validate() {
        return true;
    }

    public change(model: PhGame.ImageModel) {
        this._debug = model.debug;

        this.key = model.key;

        this.scale.setTo(model.scale);
        this.position.copyFrom(model.position);
        this.anchor.copyFrom(model.anchor);

        this.width = model.width;
        this.height = model.height;

        return true;
    }

    public update() {
    }
}