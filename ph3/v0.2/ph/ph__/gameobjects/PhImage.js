import { PhGame } from '../PhGame';

export class PhImage extends Phaser.Image implements PhGame.ObjectItem {
    public id;

    constructor(game: Phaser.Game, model: PhGame.ImageModel) {
        super(game, model.position.x, model.position.y, model.asset, model.frame);

        this.id = model._id;
        this.change(model);
    }

    public validate() {
        return true;
    }

    public change(model: PhGame.ImageModel) {
        this.key = model.key;

        this.scale.setTo(model.scale);
        this.position.copyFrom(model.position);
        this.anchor.copyFrom(model.anchor);

        this.width = model.width;
        this.height = model.height;

        return true;
    }

    public update() { }
}