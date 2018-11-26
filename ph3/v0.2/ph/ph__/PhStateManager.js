import { PhState } from './PhState';

export class PhStateMan {
    private _state: Phaser.StateManager;

    constructor(state: Phaser.StateManager) {
        this._state = state;
    }

    public add(phState: PhState): void {
       this._state.add(phState.id, phState);
    }

    public remove(id): void {
       this._state.remove(id);
    }

    public init(key, clearWorld?, clearCache?): void {
        this._state.start(key, clearWorld, clearCache);
    }

    public pause(): void {
        this._state['pause']();
    }

    public resume(): void {
        this._state.resume();
    }

    public reset(): void {
        this._state.clearCurrentState(); // --> world.shutdown()
        this._state.current = '';
    }
}