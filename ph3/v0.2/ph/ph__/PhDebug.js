export class PhDebug {
    private _debug: Phaser.Utils.Debug;
    private _world: Phaser.World;

    constructor(game: Phaser.Game) {
        this._debug = game.debug;
        this._world = game.world;
    }

    public render(): void {
        this._world.forEach(function (item) {
            if (item._debug) {
                this._debug.body(item);
            }
        }, this);
    }

    public reset(): void {
        this._debug.reset();
    }
}