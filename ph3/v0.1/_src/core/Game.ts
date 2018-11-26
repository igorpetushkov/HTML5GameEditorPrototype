
export namespace Game {
    const enum RENDERER { CANVAS, WEBGL }

    interface Config extends GameItemModel {
        url;
        name;
        width;
        height;
        domID;
        renderer: RENDERER;
        control,
        physics: {
            arcade,
            p2
        },
        storages: {
            data | null; // json|http://localhost/GameA1.data.json or firebase|http://game1.com/api/data
            assets | null;
            physics | null;
        }
    }
}

export class Game {
    static create(): Promise<Game>;
    static bootstrap(): Promise<Game>;
    static dump(game: Game, url): Promise<boolean>;
    static load(url): Promise<Game>;

    private _config: Game.Config;

    private _collections: CollectionManager;
    private _storages: StorageManager;
    private _caches: CacheManager;

    constructor(config: Game.Config);
    // const gameSelectors = {image: this.image, images: this.images}
    // this._collections = new CollectionManager(this._storages, this._caches);

    started;
    stopped;
    paused;
    resumed;

    init(): Promise<boolean>;
    shutdown(): Promise<boolean>;

    play(): Promise<boolean>;
    stop(): Promise<boolean>;
    pause(): Promise<boolean>;
    resume(): Promise<boolean>;

    image(arg | number): ImageObjectSelector;
    // this.images(arg).selectAll()

    images(...args: (string | number)[]): ImageCollection;
    // format args to string[]
    // this._collections.get(COLLECTION.IMAGES, args)


}

