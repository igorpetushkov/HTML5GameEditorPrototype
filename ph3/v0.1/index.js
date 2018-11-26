import { Game } from './core/Game';
import { Scene } from './game/scene/Scene';
import { Layer } from './game/layer/Layer';

import Loader from './core/Loader';
import Builder from './factory/Builder';

import { loadGameData, loadGameConfig } from '../lib/data';
import { loadAssetData } from '../lib/assets';

import { ObjectGroup } from './game/group/ObjectGroup';
import { ImageObject } from './game/object/ImageObject';
import { SpriteObject } from './game/object/SpriteObject';

import { Assets } from './game/asset/Assets';
import { ImageAsset } from './game/asset/ImageAsset';


export default class Kroppli {
    public static async import(url): Promise<{
        config: Kroppli.Storage.Model.Game
        data: Kroppli.Storage.Model.Data,
        assets: Kroppli.Storage.Model.Asset[],
    }> {
        const config = await loadGameConfig(url + '/config.json');
        const data = loadData ? await loadGameData(url + '/data.json') : [];
        const assets = loadData ? await loadAssetData(url + '/assets.json') : [];

        return { config, data, assets };
    }

    static CONFIG_FILE = 'config.json';
    static DATA_FILE = 'data.json';
    static ASSETS_FILE = 'assets.json';

    private _url;

    constructor(url?) {
        // if (!helper.validateUrl(url)) {
            // throw 'error: Game url is not valid.';
        // }

        this._url = url;
    }

    public async load(url?): Promise<Kroppli.API> {
        if (url) {
            // helper.validateUrl(url)
            this._url = url;
        }

        if (!this._url) {
            throw 'error: Game url not found.';
        }

        if (Game.get()) {
            throw 'error: Game already created.';
        }

        const gameModel = await Loader.loadGameConfig(`${this._url}/${Kroppli.CONFIG_FILE}`);
        const gameData = await Loader.loadGameData(`${this._url}/${Kroppli.DATA_FILE}`);
        const assetsData = await Loader.loadAssetData(`${this._url}/${Kroppli.ASSETS_FILE}`);

        const game = await Builder.buildGame(gameModel).init([].concat(gameData, assetsData));

        return {
            game: game,
        } as Kroppli.API;
    }

    get game(): typeof Game {
        return Game;
    }

    get scene(): Scene {
        return Scene;
    }

    get layer(): Layer {
        return Layer;
    }

    get group(): ObjectGroup {
        return ObjectGroup;
    }

    get sprite(): SpriteObject {
        return SpriteObject;
    }

    get asset(): {image: ImageAsset} {
        return {
            image: ImageAsset,
        };
    }

    get assets(): Assets {
        return Assets;
    }
}