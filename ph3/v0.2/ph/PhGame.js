import Ph from './Ph';

export default class PhGame extends Ph {
    constructor(config) {
        super(config.key);

        super.ph = new Phaser.Game(config);
        // this._stateman = new PhStateMan(this._game.state);
    }

    data() {
        
    }

    // get stateman() {
    //     return this._stateman;
    // }

    // get loader() {
    //     return this._loader;
    // }

    // get world() {
    //     return this._world;
    // }

    // get physics() {
    //     return this._physics;
    // }

    // get debug() {
    //     return this._debug;
    // }

    // async init() {
    //     return new Promise(resolve => {
    //         const boot = new Phaser.State();

    //         boot['_id'] = boot.key = '__BOOT__';
    //         boot.create = () => {
    //             this.init1();

    //             resolve(this);
    //         };

    //         this._game.state.add(boot.key, boot, true);
    //     });
    // }

    // init1() {
    //     this._loader = new PhLoader(this._game.load);
    //     this._world = new PhWorld(this._game.world);
    //     this._physics = new PhPhysics(this._game.physics);
    //     this._debug = new PhDebug(this._game);
    // }

    // buildItem(data) {
    //     return PhGameBuilder.build(this, data);
    // }
}