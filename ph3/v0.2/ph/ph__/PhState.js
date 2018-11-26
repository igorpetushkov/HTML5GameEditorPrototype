import * as _ from 'lodash';

import { PhGame } from './PhGame';
import { PhSignal } from './PhSignal';
import { PhDebug } from './PhDebug';

export class PhState extends Phaser.State implements PhGame.Item {
    public id;

    private _phgame: PhGame;
    private _debug;
    private _phdebug: PhDebug;

    private _signals = {
        onCreate: new PhSignal(),
        afterCreate: new PhSignal(),

        onPaused: new PhSignal(),
        afterPaused: new PhSignal(),

        onResumed: new PhSignal(),
        afterResumed: new PhSignal(),

        onShutdown: new PhSignal(),
        afterShutdown: new PhSignal(),
    };

    constructor(model: PhGame.StateModel, phgame: PhGame) {
        super();

        this.id = model._id;
        this.key = model.key;

        this._phgame = phgame;
        this._debug = model.debug;

        this.create = () => this._signals['onCreate'].dispatch();
        this.paused = () => this._signals['onPaused'].dispatch();
        this.resumed = () => this._signals['onResumed'].dispatch();
        this.shutdown = () => this._signals['onShutdown'].dispatch();
    }

    public on(signal, callback: Function, addOnce): void {
        this._signals[`on${_.startCase(signal)}`][addOnce ? 'addOnce' : 'add'](callback);
    }

    public after(signal, callback: Function, addOnce): void {
        this._signals[`after${_.startCase(signal)}`][addOnce ? 'addOnce' : 'add'](callback);
    }

    public result(signal, result): void {
        this._signals[`after${_.startCase(signal)}`].dispatch(result);
    }

    public validate() {
        return true;
    }

    public change(model: PhGame.StateModel) {
        const state = this.game.state.states[model._id];

        if (state) {
            state.key = model.key;

            if (this._debug && !model.debug && this._phdebug) {
                this._phdebug.reset();
            }

            this._debug = model.debug;
        }

        return true;
    }

    public update() { }

    public render() {
        if (this._debug) {
            if (!this._phdebug) {
                this._phdebug = this._phgame.debug;
            }

            this._phdebug.render();
        }
    }
}