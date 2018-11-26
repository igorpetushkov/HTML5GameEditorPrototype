import * as _ from 'lodash';

import { PhGame } from '../lib/phaser';
import { Storage } from '../storage/Storage';
import { DataStorage } from '../storage/DataStorage';
import { AssetsStorage } from '../storage/AssetsStorage';
import { Room } from './room/Room';
import { Pool } from './pool/Pool';
// import { Scene } from './scene/Scene';
// import { ImageAsset } from '../asset/ImageAsset';

import Builder from '../factory/Builder';

let _game: Game;

export default class Game {
    public static async start(): Promise<boolean> {
        return true;
    }

    public static async stop(): Promise<boolean> {
        return true;
    }

    public static async pause(): Promise<boolean> {
        return true;
    }

    public static async resume(): Promise<boolean> {
        return true;
    }

    public static select(): Game {
        return Game.get();
    }

    public static get(): Game {
        return _game;
    }

    public static ph(): PhGame {
        return _game.ph;
    }

    public static getPool(): Pool {
        return _game.pool;
    }

    public static getStorage(): DataStorage {
        return _game.storage;
    }

    public static getRoom(): Room {
        return _game.room;
    }

    private _model: Game.Model;
    private _ph: PhGame;
    private _pool: Pool;
    private _storage: DataStorage;
    private _room: Room;

    public constructor(model: Game.Model) {
        if (!this.validate(model)) {
            throw 'error: Game.construct has wrong model';
        }

        this._model = model;
        this._ph = new PhGame(model);
        this._pool = new Pool();

        this._room = new Room(model);

        /*const dataStorageURI = Storage.Helper.formatUrl('kroppli-data', _.get<string>(model, 'storages.data'));

        if (dataStorageURI) {
            this._storage = new DataStorage({ key: dataStorageURI });
        }*/
    }

    public get ph(): PhGame {
        return this._ph;
    }

    public get pool(): Pool {
        return this._pool;
    }

    public get storage(): DataStorage {
        return this._storage;
    }

    public get room(): Room {
        return this._room;
    }

    public validate(model: Game.Model) {
        return true;
    }

    public async init(/* one data arg? */data?: Storage.Model[], assets?: AssetsStorage.Model[]): Promise<Game> {
        /*if (this._storage) {
            const storageData = await this._storage.init(data => this.update(data, false, false),
                [
                    { fields: ['typeclass'] },
                    { fields: ['typeclass', 'key'] },
                    { fields: ['timestamp'] },
                ]
            );

            data = data || storageData;
        }*/

        await this._ph.init();

        // TODO: combine assets and data

        await this._pool.init(assets);
        await this._pool.init(data);

        await this._room.init(data);

        /*await Assets.build(this._model.storages.assets);*/

        return this;
    }

    /*public async sync(items?: PoolItem[], deep, validate): Promise<boolean> {
        return await this._storage.sync(items, deep, validate);
    }*/

    public debug(value): Game {
        _.assign(this._model, { debug: value });

        return this;
    }

    public uiplayer(value): Game {
        _.assign(this._model, { uiplayer: value });

        return this;
    }
}

// import Kroppli from "Kroppli";

// import KroppliUI from "ui/KroppliUI";

// import GameLoader from "game/Game/core/GameLoader";
// import Scene from "game/Game/core/Scene";
// import GameState from "game/Game/core/GameState";
// import GameStorage from "game/Game/core/GameStorage";
// import {StorageType} from "game/Game/core/GameStorage";

// import AssetFactory from "game/core/assets/AssetFactory";
// import {LoadStatus} from "game/Game/core/GameLoader";
// import {BaseAsset} from "game/core/assets/BaseAsset";

// const DEFAULT_SCENE_NAME = "Default1";

// export interface IGameFileData {
//     name;
//     config: Phaser.IGameConfig;
// }

// export default class Game {
//     private _phaser: PhGame;

//     private _name;
//     private _data: IGameFileData;

//     private _loader: GameLoader;
//     private _scene: Scene;
//     private _state: GameState;
//     private _storage: GameStorage;

//     private _onGameLoaded: Phaser.Signal;

//     constructor(data: IGameFileData) {
//         this._phaser = new PhGame(data.config);

//         this._name = data.name;
//         this._data = data;
//         this._mode = GameMode.Scene;

//         this._onGameLoaded = new Phaser.Signal();
//     }

//     static loadGame(data: IGameFileData): Promise<KroppliGame> {
//         return new Promise<KroppliGame>((resolve, reject) => {
//             let game = new KroppliGame(data);
//             resolve(game);

//             let boot = new Phaser.State();
//             boot.key = "__Boot__";

//             boot.init = () => {
//                 game.init();
//             };

//             boot.create = () => {
//                 game.Phaser.state.remove(boot.key);
//                 game.init();

//                 AssetFactory.buildLocalAssets().then((localAssets: BaseAsset[]) => {
//                     localAssets = localAssets.map((asset: BaseAsset) => {
//                         asset.setLoadStatus(LoadStatus.ToLoad);

//                         return asset;
//                     });

//                     Kroppli.Game.Storage.addItems(localAssets, StorageType.Asset);

//                     game.start();
//                 });
//             };

//             game.Phaser.state.add(boot.key, boot, true);
//         });
//     }

//     static saveGame() {}

//     setName(name): void {
//         this._name = name;
//     }

//     getName() {
//         return this._name;
//     }

//     setMode(mode: GameMode): void {
//         this._mode = mode;
//     }

//     getMode(): GameMode {
//         return this._mode;
//     }

//     onGameLoaded(listener, addOnce): void {
//         this._onGameLoaded[addOnce ? "addOnce" : "add"](listener);
//     }

//     changeState(state: GameState): void {
//         this._state = state;
//     }

//     changeScene(scene: Scene): void {
//         if (scene) {
//             let activeObject = this._scene.getActiveObject();
//             if (activeObject) {
//                 activeObject.setActive(false);
//             }

//             this._scene = scene;
//             Kroppli.Game.State.reCreate().restart();
//         } else {
//             // error
//         }
//     }

//     removeScene(): void {
//         let nextScene = Kroppli.Game.Storage.removeScene(this._scene, true);
//         this.changeScene(nextScene);
//     }

//     init(): void {
//         this._loader = new GameLoader();
//         this._scene = new Scene(DEFAULT_SCENE_NAME);
//         this._state = new GameState();
//         this._storage = new GameStorage();
//         this._storage.addScene(this._scene);
//     }

//     start() {
//         this._phaser.state.add(this._state.key, this._state, true);
//         this._onGameLoaded.dispatch();
//     }

//     restart(clearWorld, clearCache) {
//         this._phaser.state.restart(clearWorld, clearCache);
//     }

//     pause() {}

//     stop() {}
// }