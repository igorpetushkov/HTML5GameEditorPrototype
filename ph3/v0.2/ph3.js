import Configs from './configs/Configs';
import Games from './games/Games';

class Ph3 {
    constructor() {
        this._configs = new Configs(this);
        this._games = new Games(this);
    }

    init() { }
    dump() { }

    info() {
        return {
            configs: this.configs.info(),
            games: this.configs.info(),
        };
    }

    get configs() {
        return ph3._configs.multiple;
    }

    get config() {
        return ph3._configs.single;
    }

    get games() {
        return ph3._games.multiple;
    }

    get game() {
        return ph3._games.single;
    }
}

const ph3 = new Ph3();

window.ph3 = ph3;

export default ph3;