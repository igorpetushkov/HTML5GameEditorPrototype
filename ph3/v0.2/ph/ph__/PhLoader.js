/* @flow */

import { PhGame } from './PhGame';

export class PhLoader {
    private _loader: Phaser.Loader;

    constructor(loader: Phaser.Loader) {
        this._loader = loader;
    }

    public async load(model): Promise {
        return new Promise((resolve) => {
            this._loader.onFileComplete.add((progress, name, success) => {
                if (name === model._id) {
                    resolve(success);
                }
            });

            const func = this._loader[model.typeasset];
            if (func instanceof Function) {
                func.call(this._loader, model._id, model.url);

                this._loader.start();
            }
        });
    }

}

// import Kroppli from "Kroppli";
// import BaseAsset from "game/core/assets/BaseAsset";

// export interface IFileLoadComplete {
//     (progress, name, success, loaded, total);
// }

// export interface IFileLoadError {
//     (name);
// }

// export enum LoadStatus {
//     NotLoaded,
//     ToLoad,
//     ToUnload,
//     Loaded,
//     Error
// }

// export enum LoadStatus {
//     NotLoaded,
//     Loaded,
//     Error,
//     NeedLoad,
//     NeedUnload
// }

// export default class GameLoader {
//     private _phLoad: Phaser.Loader;
//     private _phCache: Phaser.Cache;

//     private _fileLoadQuery: {[name]: Function};
//     private _fileLoadComplete: Phaser.Signal;

//     constructor() {
//         this._phLoad = Kroppli.Game.Phaser.load;
//         this._phLoad["texture"] = this._phLoad.image;

//         this._phCache = Kroppli.Game.Phaser.cache;
//         this._phCache["removeTexture"] = this._phCache["removeImage"];

//         this._fileLoadQuery = {};
//         this._fileLoadComplete = new Phaser.Signal();

//         this._phLoad.onFileComplete.add((progress, name, success) => {
//             if (this._fileLoadQuery[name]) {
//                 this._fileLoadQuery[name].call(this, success);
//                 delete this._fileLoadQuery[name];
//             }

//             if (progress === 100) {
//                 setTimeout(() => {
//                     this._fileLoadComplete.dispatch();
//                 }, 100);
//             }
//         });

//         // this._phLoad.onFileError.add((name) => {
//         //     this._fileLoadQuery[name].call(this, false);
//         //     delete this._fileLoadQuery[name];
//         // });
//     }

//     onComplete(listener, addOnce): void {
//         this._fileLoadComplete[addOnce ? "addOnce" : "add"](listener);
//     }

//     loadFile(method, name, url, overwrite): Promise<boolean> {
//         return new Promise<boolean>((resolve, reject) => {
//             if (this._phLoad[method]) {
//                 if (!this._fileLoadQuery[name]) {
//                     this._phLoad[method](name, url);

//                     this._fileLoadQuery[name] = resolve;
//                 } else {
//                     // error
//                 }
//             } else {
//                 // error
//             }
//         });
//     }

//     unloadFile(method, name, destroy): Promise<boolean> {
//         return new Promise<boolean>((resolve, reject) => {
//             method = "remove" + _.upperFirst(method);
//             if (this._phCache[method]) {
//                 this._phCache[method](name, destroy);

//                 resolve(true);
//             } else {
//                 resolve(false);
//             }
//         });
//     }
// }