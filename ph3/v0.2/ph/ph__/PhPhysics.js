import { PhGame } from './PhGame';

export default class PhPhysics {
    public static ARCADE = Phaser.Physics.ARCADE;
    public static P2 = Phaser.Physics.P2JS;

    private _physics: Phaser.Physics;

    constructor(physics: Phaser.Physics) {
        this._physics = physics;
    }

    public add(phobject: PhGame.ObjectItem, system = PhPhysics.ARCADE): void {
        const isArcade = this._physics.config.arcade;
        const isP2 = this._physics.config.p2;

        if (system === PhPhysics.ARCADE && isArcade) {
            this._physics.arcade.enable(phobject);
        } else if (system === PhPhysics.P2 && isP2) {
            this._physics.p2.enable(phobject);
        }
    }

    public collideTwoObject(phobjectA: PhGame.ObjectItem, phobjectB: PhGame.ObjectItem) {
        this._physics.arcade.collide(phobjectA, phobjectB,
            (...args[]) => {

            },
            (...args[]) => {
                return true;
            }
        );
    }
}