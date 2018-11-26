import * as _ from 'lodash';

import { PhGame, PhState } from '../../lib/phaser';
import { Game } from '../Game';
import { PoolItem } from '../pool/PoolItem';
import { DataStorage } from '../../storage/DataStorage';
import { InfoService } from '../../services/info/InfoService';
import { PrintService } from '../../services/print/PrintService';
import { GameObject } from '../object/GameObject';


function sealed(constructor: Function) {
    constructor.prototype.ttt33 = () => {

    };
}

@sealed
export default class Scene extends PoolItem {
    public static active: Scene = null;

    public static async info(key?, deep): Promise<InfoService.Modell> {
        return await InfoService.info({ typeclass: 'scene', key: key, deep: deep });
    }

    public static async infoDeep(key?): Promise<InfoService.Modell> {
        return await Scene.info(key, true);
    }

    public static print(key?, deep): void {
        Scene.info(key, deep).then(data => PrintService.print(...[].concat(data)));
    }

    public static printDeep(key?): void {
        return Scene.print(key, true);
    }

    public static select(key): Scene {
        return Game.getPool().findItem({
            typeclass: 'scene',
            key: key,
        }) as Scene;
    }

    public static async init(scene?, clearWorld?, clearCache?): Promise<boolean> {
        if (Scene.active && Scene.active.key() === scene) {
            console.info('error: Scene.init - already run');
            return;
        }

        const _scene = scene ? Game.getPool().findItemByKey(scene, 'scene') as Scene :
            Game.getPool().findItem({ typeclass: 'scene', active: true }) as Scene;

        if (!_scene) {
            throw 'error: Scene.init - no actice scene found';
        }

        if (Scene.active && Scene.active.id === _scene.id) {
            console.info('error: Scene.init - already run [2]');
            return;
        }

        return new Promise<boolean>((resolve) => {
            _scene.init();

            _scene.ph<PhState>().after('create', async (result) => {
                Scene.active = result ? _scene : null;

                resolve(result);
            });

            _scene.init1(clearWorld, clearCache);
        });
    }

    public static async fill(): Promise<boolean> {
        if (!Scene.active) throw 'error: Game.fill - no active scene is found';

        return await Scene.active.fill();
    }

    public static async clear(): Promise<boolean> {
        if (!Scene.active) throw 'error: Game.clear - no active scene is found';

        return await Scene.active.clear();
    }

    public static async shutdown(): Promise<boolean> {
        if (!Scene.active) {
            throw 'error: Game.shutdown - no active scene is found';
        }

        return new Promise<boolean>((resolve) => {
            Scene.active.ph<PhState>().after('shutdown', (result) => {
                if (result) {
                    Scene.active = null;
                }

                resolve(result);
            });

            Scene.active.reset();
        });
    }

    public static async destroy(): Promise<boolean> {
        if (!Scene.active) {
            throw 'error: Game.destroy - no active scene is found';
        }

        return new Promise<boolean>((resolve) => {
            Scene.active.ph<PhState>().after('shutdown', (result) => {
                if (result) {
                    Scene.active.destroy();
                    Scene.active = null;
                }

                resolve(result);
            });

            debugger;
            Scene.active.reset();
        });
    }

    public static async start(): Promise<boolean> {
        return true;
    }

    public static async pause(): Promise<boolean> {
        if (!Scene.active) {
            throw 'error: Game.pause - no active scene is found';
        }

        return new Promise<boolean>((resolve) => {
            Scene.active.ph<PhState>().after('paused', (result) => {
                debugger;
                resolve(result);
            });

            debugger;
            Game.ph().stateman.pause();
        });
    }

    public static async resume(): Promise<boolean> {
        if (!Scene.active) {
            throw 'error: Game.pause - no active scene is found';
        }

        return new Promise<boolean>((resolve) => {
            Scene.active.ph<PhState>().after('resumed', (result) => {
                resolve(result);
            });

            Game.ph().stateman.resume();
        });
    }

    // private _isDebug;

    public constructor(model: DataStorage.SceneModel) {
        super(model);
    }

    public init1(clearWorld?, clearCache?): void {
        // this._isDebug = this.attr('debug');

        const ph = this.ph() as PhState;

        this.ph('oncreate state', args);

        ph.on('create', async () => await this.create());
        ph.on('paused', async () => await this.pause());
        ph.on('resumed', async () => await this.resume());
        ph.on('shutdown', async () => await this.shutdown());

        ph.update = this.update_.bind(this, ph.update.bind(ph));
        ph.render = this.render_.bind(this, ph.render.bind(ph));

        Game.ph().stateman.init(this.id, clearWorld, clearCache);
    }

    public debug(value?) & Scene {
        return this.attr('debug', value);
    }

    public active(value?) & Scene {
        return this.attr('active', value);
    }

    public thumbnail(value?) & Scene {
        return this.attr('thumbnail', value);
    }

    public validate() {
        return true;
    }

    public add(...objects[]): Scene {
        const sceneId = this.id;

        _.each(objects, object => {
            const item = Game.getPool().findItemByKey(object, 'object') as GameObject;

            if (item) {
                item.scene(sceneId);
            }
        });

        return this;
    }

    public remove(...objects[]): Scene {
        _.each(objects, object => {
            const item = Game.getPool().findItemByKey(object, 'object') as GameObject;

            if (item) {
                item.scene(null);
            }
        });

        return this;
    }

    public getLinks(predicate?): PoolItem[] {
        if (predicate) {
            return Game.getPool().findItems(predicate);
        } else {
            const layers = Game.getPool().findItems(_.assign({
                scene: this.model._id,
                typeclass: 'layer',
            }, predicate));

            const groups = Game.getPool().findItems(_.assign({
                scene: this.model._id,
                typeclass: 'group',
            }, predicate));

            return [].concat(layers, groups);
        }
    }

    public postUpdate(isOk): void {
        // this._isDebug = this.attr('debug');
    }

    public async create(): Promise<void> {
        await this.fill();

        this.ph<PhState>().result('create', true);
    }

    public async fill(): Promise<boolean> {
        const isOk = Game.getPool().validate([this]);

        if (isOk) {
            const linksNotInWorld = _.filter(this.getLinks({ typeclass: 'object' }), link => !link.ph());

            _.each(linksNotInWorld, link => Game.ph().world.add(link.init().dirty(false).ph()));
        }

        return isOk;
    }

    public async clear(): Promise<boolean> {
        Game.ph().world.clear();

        Game.ph().world.clear();

        Game.ph('clear world');

        Game.ph('update object', args);

        Game.ph('remove state', args);

        this.ph('')

        return true;
    }

    public async reset(): Promise<boolean> {
        Game.ph().stateman.reset();

        return true;
    }

    public async start(): Promise<void> {

    }

    public async pause(): Promise<void> {
        this.ph<PhState>().result('paused', true);
    }

    public async resume(): Promise<void> {
        this.ph<PhState>().result('resumed', true);
    }

    public async shutdown(): Promise<void> {
        this.active(false).dirty(false);

        this.ph<PhState>().result('shutdown', true);
        this.ph<PhState>().destroy();
    }

    public destroy(): void {
        Game.ph().stateman.remove(this.id);

        super.destroy();
    }


    public update_(phfunc: Function): void {
        phfunc();

        // let objects = Game.ph().world.getAll(item => !!item.body) as PhGame.ObjectItem[];
        // Game.ph().physics.collideTwoObject(objects[0], objects[1]);
    }

    public render_(phfunc: Function): void {
        phfunc();
    }
}

// // import StorageItem from 'game/core/storage/StorageItem';
// // import GameObject from 'game/core/scene/objects/GameObject';

// export default class Scene extends StorageItem {
//     name;

//     constructor(name) {
//         super();

//         this.name = name;
//     }

//     getRelatedObjects(): GameObject[] {
//         return [];
//     }

//     // removeScene(scene: Scene, next): Scene {
//     //     if (this._scenes.length === 1) {
//     //         // error
//     //     }

//     //     if (next) {
//     //         let index = _.findIndex(this._scenes, scene);
//     //         let sceneAfter = this._scenes[index + 1];
//     //         let sceneBefore =  this._scenes[index - 1];

//     //         let removed = _.head(_.pull(this._scenes, scene));
//     //         removed.destroy();

//     //         return sceneAfter ? sceneAfter : sceneBefore;
//     //     }

//     //     let removed = _.head(_.pull(this._scenes, scene));
//     //     removed.destroy();

//     //     return null;
//     // }
// }