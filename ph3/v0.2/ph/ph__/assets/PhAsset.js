import { PhGame } from '../PhGame';
import { PhLoader } from '../PhLoader';

export abstract class PhAsset implements PhGame.Asset {
    private _model: PhGame.AssetModel;
    private _loader: PhLoader;
    private _loaded;
    private _loadError;

    constructor(loader: PhLoader, model: PhGame.AssetModel) {
        this._loader = loader;
        this._model = model;
    }

    public get id() {
        return this._model._id;
    }

    public validate() {
        return true;
    }

    public change(model: PhGame.AssetModel) {
        return true;
    }

    public async load(): Promise<boolean> {
        if (this._loaded) {
            return true;
        }

        this._loaded = await this._loader.load(this._model);

        return this._loaded;
    }

    public async unload(): Promise<boolean> {
        return true;
    }

    public isLoaded() {
        return this._loaded;
    }

    public getLoadError() {
        return this._loadError;
    }

    // public destroy() {
    //     // remove from world
    // }

    // public change(data: PhAssetImage.Data) {
    //     return true;
    // }
}