import { PhPoint } from './PhPoint';
// import { PhState } from './PhState';
// import { PhLayer } from './PhLayer';
// import { PhImage } from './gameobject/PhImage';
// import { PhAssetImage } from './asset/PhAssetImage';
import { PhGameBuilder } from './PhGameBuilder';
import { PhStateMan } from './PhStateMan';
import { PhWorld } from './PhWorld';
import { PhLoader } from './PhLoader';
import { PhPhysics } from './PhPhysics';
import { PhDebug } from './PhDebug';

export default class PhGame {
    // private _game: Phaser.Game;

    // private _config: PhGame.Config;
    // private _stateman: PhStateMan;
    // private _loader: PhLoader;
    // private _world: PhWorld;
    // private _physics: PhPhysics;
    // private _debug: PhDebug;

    constructor(config) {
        this._config = config;
        this._game = new Phaser.Game(config);
        this._stateman = new PhStateMan(this._game.state);
    }

    get game() {
        return this._game;
    }

    get config() {
        return this._config;
    }

    get stateman() {
        return this._stateman;
    }

    get loader() {
        return this._loader;
    }

    get world() {
        return this._world;
    }

    get physics() {
        return this._physics;
    }

    get debug() {
        return this._debug;
    }

    async init() {
        return new Promise(resolve => {
            const boot = new Phaser.State();

            boot['_id'] = boot.key = '__BOOT__';
            boot.create = () => {
                this.init1();

                resolve(this);
            };

            this._game.state.add(boot.key, boot, true);
        });
    }

    init1() {
        this._loader = new PhLoader(this._game.load);
        this._world = new PhWorld(this._game.world);
        this._physics = new PhPhysics(this._game.physics);
        this._debug = new PhDebug(this._game);
    }

    buildItem(data) {
        return PhGameBuilder.build(this, data);
    }
}