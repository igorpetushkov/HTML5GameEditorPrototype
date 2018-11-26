import Buffer from '../core/buffer';

export const DEFAULT_CONFIG_DATA = {
    key: 'default',
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: 'phaser',
};

export default class Configs extends Buffer {
    constructor(ph3) {
        super(DEFAULT_CONFIG_DATA);

        this._ph3 = ph3;
    }
}